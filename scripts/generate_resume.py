#!/usr/bin/env python3
"""Generate Shine Bo Bo's one-page, Canva-style resume PDF."""

from io import BytesIO
from pathlib import Path
from shutil import copy2

from PIL import Image, ImageOps
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "shine-bo-bo-resume.pdf"
PUBLIC_OUTPUT = ROOT / "public" / "resume.pdf"
PROFILE_IMAGE = ROOT / "public" / "images" / "profile.jpg"

PAGE_WIDTH, PAGE_HEIGHT = A4
SIDEBAR_WIDTH = 190
HEADER_HEIGHT = 126
INK = colors.HexColor("#181411")
NAVY = colors.HexColor("#0F172A")
BLUE = colors.HexColor("#3B82F6")
SLATE = colors.HexColor("#475569")
MUTED = colors.HexColor("#64748B")
SIDEBAR = colors.HexColor("#ECE7E3")
WHITE = colors.white
RULE = colors.HexColor("#C9C2BD")


def wrap_lines(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(pdf, text, x, y, max_width, font_name="Helvetica", font_size=8.2, leading=10.4, color=SLATE):
    pdf.setFillColor(color)
    pdf.setFont(font_name, font_size)
    for line in wrap_lines(text, font_name, font_size, max_width):
        pdf.drawString(x, y, line)
        y -= leading
    return y


def draw_sidebar_heading(pdf, text, y):
    x = 27
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 10.3)
    pdf.drawString(x, y, text.upper())
    pdf.setStrokeColor(RULE)
    pdf.setLineWidth(0.7)
    pdf.line(x, y - 6, SIDEBAR_WIDTH - 18, y - 6)
    return y - 18


def draw_main_heading(pdf, text, y):
    x = SIDEBAR_WIDTH + 20
    right = PAGE_WIDTH - 22
    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 10.7)
    pdf.drawString(x, y, text.upper())
    pdf.setStrokeColor(colors.HexColor("#D6DCE6"))
    pdf.setLineWidth(0.7)
    pdf.line(x, y - 6, right, y - 6)
    return y - 18


def draw_bullet(pdf, text, x, y, max_width, font_size=7.65, leading=9.4):
    pdf.setFillColor(BLUE)
    pdf.circle(x + 2, y + 2.2, 1.3, stroke=0, fill=1)
    return draw_wrapped(pdf, text, x + 9, y, max_width - 9, "Helvetica", font_size, leading, SLATE) - 1


def draw_entry(pdf, title, meta, bullets, y, x=None, width=None):
    if x is None:
        x = SIDEBAR_WIDTH + 20
    if width is None:
        width = PAGE_WIDTH - x - 22
    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 8.45)
    for line in wrap_lines(title, "Helvetica-Bold", 8.45, width):
        pdf.drawString(x, y, line)
        y -= 10.2
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica-Oblique", 7.1)
    for line in wrap_lines(meta, "Helvetica-Oblique", 7.1, width):
        pdf.drawString(x, y, line)
        y -= 8.6
    y -= 1
    for bullet in bullets:
        y = draw_bullet(pdf, bullet, x, y, width)
    return y - 4


def circular_profile_image():
    image = Image.open(PROFILE_IMAGE).convert("RGB")
    # Keep the complete hairline and head-and-shoulders framing from the original portrait.
    fitted = ImageOps.fit(image, (800, 800), method=Image.Resampling.LANCZOS, centering=(0.5, 0.12))
    buffer = BytesIO()
    fitted.save(buffer, format="JPEG", quality=92)
    buffer.seek(0)
    return ImageReader(buffer), buffer


def link_text(pdf, label, url, x, y, size=7.65, color=INK):
    pdf.setFillColor(color)
    pdf.setFont("Helvetica", size)
    pdf.drawString(x, y, label)
    width = stringWidth(label, "Helvetica", size)
    pdf.linkURL(url, (x, y - 2, x + width, y + size + 1), relative=0)


def build_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Shine Bo Bo - One-Page Resume")
    pdf.setAuthor("Shine Bo Bo")
    pdf.setSubject("Software and Digital Engineering internship resume")
    pdf.setCreator("Shine Bo Bo portfolio")

    pdf.setFillColor(WHITE)
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)
    pdf.setFillColor(SIDEBAR)
    pdf.rect(0, 0, SIDEBAR_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)
    pdf.setFillColor(INK)
    pdf.rect(SIDEBAR_WIDTH, PAGE_HEIGHT - HEADER_HEIGHT, PAGE_WIDTH - SIDEBAR_WIDTH, HEADER_HEIGHT, stroke=0, fill=1)

    photo_reader, photo_buffer = circular_profile_image()
    photo_x = 33
    photo_y = PAGE_HEIGHT - 154
    photo_size = 124
    pdf.saveState()
    clip = pdf.beginPath()
    clip.circle(photo_x + photo_size / 2, photo_y + photo_size / 2, photo_size / 2)
    pdf.clipPath(clip, stroke=0, fill=0)
    pdf.drawImage(photo_reader, photo_x, photo_y, photo_size, photo_size, preserveAspectRatio=True, mask="auto")
    pdf.restoreState()
    pdf.setStrokeColor(WHITE)
    pdf.setLineWidth(4)
    pdf.circle(photo_x + photo_size / 2, photo_y + photo_size / 2, photo_size / 2, stroke=1, fill=0)
    photo_buffer.close()

    header_x = SIDEBAR_WIDTH + 20
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(header_x, PAGE_HEIGHT - 51, "SHINE BO BO")
    pdf.setFont("Helvetica", 9.7)
    pdf.setFillColor(colors.HexColor("#E5E7EB"))
    pdf.drawString(header_x, PAGE_HEIGHT - 72, "COMPUTER SCIENCE GRADUATE | DIGITAL ENGINEERING STUDENT")
    pdf.setFont("Helvetica", 8)
    pdf.setFillColor(colors.HexColor("#AEB8C8"))
    pdf.drawString(header_x, PAGE_HEIGHT - 91, "Software development | Full-stack/backend | Digital engineering")

    left_y = PAGE_HEIGHT - 170
    left_y = draw_sidebar_heading(pdf, "Contact", left_y)
    contact_x = 27
    link_text(pdf, "shinebobo648@gmail.com", "mailto:shinebobo648@gmail.com", contact_x, left_y)
    left_y -= 18
    link_text(pdf, "+66 61 858 1574", "tel:+66618581574", contact_x, left_y)
    left_y -= 18
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica", 7.65)
    pdf.drawString(contact_x, left_y, "Phuket, Thailand")
    left_y -= 18
    link_text(pdf, "portfolio-shinebobo.vercel.app", "https://portfolio-shinebobo.vercel.app", contact_x, left_y, 7.2, BLUE)
    left_y -= 16
    link_text(pdf, "linkedin.com/in/s02bb", "https://www.linkedin.com/in/s02bb/", contact_x, left_y, 7.2, BLUE)
    left_y -= 16
    link_text(pdf, "github.com/ShineBo", "https://github.com/ShineBo", contact_x, left_y, 7.2, BLUE)
    left_y -= 25

    left_y = draw_sidebar_heading(pdf, "Education", left_y)
    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 8.1)
    left_y = draw_wrapped(pdf, "B.Eng. in Digital Engineering", contact_x, left_y, 145, "Helvetica-Bold", 8.1, 9.6, NAVY)
    left_y = draw_wrapped(pdf, "Prince of Songkla University, Phuket Campus", contact_x, left_y - 1, 145, "Helvetica", 7.35, 8.8, SLATE)
    left_y = draw_wrapped(pdf, "2024-Present | Third year | GPA 4.00", contact_x, left_y - 1, 145, "Helvetica", 7.15, 8.6, MUTED)
    left_y -= 9
    left_y = draw_wrapped(pdf, "B.Sc. in Computer Science", contact_x, left_y, 145, "Helvetica-Bold", 8.1, 9.6, NAVY)
    left_y = draw_wrapped(pdf, "Myanmar Institute of Theology, Liberal Arts Program", contact_x, left_y - 1, 145, "Helvetica", 7.35, 8.8, SLATE)
    left_y = draw_wrapped(pdf, "2021-2025 | Graduated | GPA 3.74", contact_x, left_y - 1, 145, "Helvetica", 7.15, 8.6, MUTED)
    left_y -= 18

    left_y = draw_sidebar_heading(pdf, "Technical Skills", left_y)
    skill_groups = [
        ("Languages", "TypeScript, JavaScript, Python, Java, PHP, SQL, C++"),
        ("Web and APIs", "React, Next.js, Tailwind CSS, Node.js, NestJS, Express, FastAPI, Flask"),
        ("Data and ML", "PostgreSQL, MySQL, MongoDB, pandas, scikit-learn, TensorFlow/Keras"),
        ("Tools and systems", "Git, GitHub, Postman, Vercel, PlatformIO, Wokwi, ESP32, MQTT"),
        ("Hardware and resale", "PC assembly, compatibility planning, diagnostics; PC, camera, and lens sourcing and resale"),
        ("Coursework foundations", "Networking, cybersecurity, cryptography, computer architecture"),
    ]
    for label, value in skill_groups:
        pdf.setFillColor(NAVY)
        pdf.setFont("Helvetica-Bold", 7.4)
        pdf.drawString(contact_x, left_y, label)
        left_y -= 9
        left_y = draw_wrapped(pdf, value, contact_x, left_y, 145, "Helvetica", 7.05, 8.55, SLATE)
        left_y -= 6

    left_y = draw_sidebar_heading(pdf, "Core Strengths", left_y)
    for strength in (
        "Cross-cultural collaboration",
        "Practical problem-solving",
        "Communication and customer awareness",
        "Adaptability and self-directed learning",
    ):
        left_y = draw_wrapped(pdf, strength, contact_x, left_y, 145, "Helvetica", 7.5, 9.8, SLATE)
        left_y -= 2

    left_y = draw_sidebar_heading(pdf, "Languages", left_y - 5)
    left_y = draw_wrapped(pdf, "Burmese - Native", contact_x, left_y, 145, "Helvetica", 7.6, 10, SLATE)
    left_y = draw_wrapped(pdf, "English - Fluent", contact_x, left_y - 1, 145, "Helvetica", 7.6, 10, SLATE)
    left_y = draw_wrapped(pdf, "Thai - Basic (currently learning)", contact_x, left_y - 1, 145, "Helvetica", 7.6, 10, SLATE)
    draw_wrapped(pdf, "Korean - Basic coursework", contact_x, left_y - 1, 145, "Helvetica", 7.6, 10, SLATE)

    main_x = SIDEBAR_WIDTH + 20
    main_width = PAGE_WIDTH - main_x - 22
    main_y = PAGE_HEIGHT - HEADER_HEIGHT - 23
    main_y = draw_main_heading(pdf, "Professional Summary", main_y)
    summary = (
        "Third-year Digital Engineering student and Computer Science graduate with project-based experience in full-stack web development, AI/ML development, and strong foundation of other technical skills. Along with leadership, hardware and customer service experience. I have a strong interest in innovation, sustainability and inclusion. I am open to software and full-stack, or digital engineering internship."
    )
    main_y = draw_wrapped(pdf, summary, main_x, main_y, main_width, "Helvetica", 8.0, 10.2, SLATE) - 9

    main_y = draw_main_heading(pdf, "Selected Projects", main_y)
    main_y = draw_entry(
        pdf,
        "Real Estate Management System",
        "Team project | Next.js, TypeScript, NestJS, PostgreSQL, JWT | 2025",
        ["Contributed to registration, role-based dashboards, authentication, property listings, and frontend-API integration across separate team repositories."],
        main_y,
    )
    main_y = draw_entry(
        pdf,
        "Cupidy",
        "External contributor | FastAPI, SQLAlchemy, PostgreSQL, JWT | 2024",
        ["Contributed 25 GitHub-attributed commits covering accounts, profiles, photo upload, matching, likes, schemas, repository functions, and database setup."],
        main_y,
    )
    main_y = draw_entry(
        pdf,
        "Movie Recommendation Prototype",
        "External contributor | React, Flask, pandas, scikit-learn | 2024",
        ["Contributed eight public implementation commits across recommendation experiments, Flask integration, React result/detail flows, and a Streamlit test interface."],
        main_y,
    )
    main_y = draw_entry(
        pdf,
        "Portfolio Website",
        "Owner | Next.js, React, TypeScript, Tailwind CSS, Vercel | 2026",
        ["Designed and deployed a responsive, data-driven portfolio with accessible interactions, theming, metadata, and documented project evidence."],
        main_y,
    )

    main_y = draw_main_heading(pdf, "Experience", main_y - 2)
    main_y = draw_entry(
        pdf,
        "Research Intern - Flower Classification",
        "Myanmar Institute of Theology, Liberal Arts Program | Jan-Jul 2025",
        ["Prepared five-class image data, trained and evaluated a MobileNetV2 workflow, documented results, and built a Streamlit prediction interface."],
        main_y,
    )
    main_y = draw_entry(
        pdf,
        "Family Business Assistant | Freelance PC Builder and PC, Camera and Lens Reseller",
        "Family business support and self-employed work | Jan 2022-Jul 2024",
        [
            "Supported customer service, buying and selling, deliveries, cash handling, expense tracking, orders, and price negotiation for a family business.",
            "Independently sourced and resold PCs, components, cameras, and lenses; built and troubleshot custom PCs and provided basic after-sales support.",
        ],
        main_y,
    )
    main_y = draw_entry(
        pdf,
        "Logistics and Delegate Servicing Team Member",
        "AIESEC in Myanmar | Volunteer Experience | Feb 2022-Jan 2023",
        ["Supported youth-led events through logistics, delegate servicing, coordination, and participant-facing operations."],
        main_y,
    )

    main_y = draw_main_heading(pdf, "Leadership and Recognition", main_y - 1)
    highlights = [
        "President, PSU Phuket International Student Club | Current",
        "PSU Delegate, Asian Undergraduate Symposium 2026 | NUS College, Singapore",
        "JASSO-supported participant, Asia Design Global Workshop 2025 | Tokyo",
        "Outstanding Academic Performance Award | PSU, academic year 2024",
        "230 recorded PSU activity hours | 100 required for graduation",
    ]
    for item in highlights:
        main_y = draw_bullet(pdf, item, main_x, main_y, main_width, 7.55, 9.2)

    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica-Oblique", 6.8)
    pdf.drawRightString(PAGE_WIDTH - 22, 17, "Detailed CV and project evidence available through the portfolio.")
    pdf.save()
    copy2(OUTPUT, PUBLIC_OUTPUT)
    return OUTPUT


if __name__ == "__main__":
    generated = build_resume()
    print(f"Generated {generated}")
    print(f"Published {PUBLIC_OUTPUT}")
