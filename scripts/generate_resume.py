#!/usr/bin/env python3
"""Generate Shine Bo Bo's ATS-friendly portfolio resume PDF."""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "shine-bo-bo-cv.pdf"

NAVY = colors.HexColor("#0F172A")
BLUE = colors.HexColor("#2563EB")
SLATE = colors.HexColor("#475569")
MUTED = colors.HexColor("#64748B")
LIGHT = colors.HexColor("#CBD5E1")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=25,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "tagline": ParagraphStyle(
            "Tagline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=BLUE,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.1,
            leading=11,
            textColor=SLATE,
            alignment=TA_CENTER,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=12,
            textColor=NAVY,
            spaceBefore=5,
            spaceAfter=2,
        ),
        "entry": ParagraphStyle(
            "Entry",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.3,
            leading=11.5,
            textColor=NAVY,
            spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=11.1,
            textColor=SLATE,
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.7,
            leftIndent=8,
            firstLineIndent=-7,
            textColor=SLATE,
            spaceAfter=1.2,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.7,
            leading=10,
            textColor=MUTED,
        ),
    }


STYLES = build_styles()


def section(story, title):
    story.append(Paragraph(escape(title.upper()), STYLES["section"]))
    story.append(HRFlowable(width="100%", thickness=0.7, color=BLUE, spaceBefore=0, spaceAfter=4))


def entry(title, context, bullets, body=None):
    blocks = [
        Paragraph(
            f"<b>{escape(title)}</b> <font color='#64748B'>| {escape(context)}</font>",
            STYLES["entry"],
        )
    ]
    if body:
        blocks.append(Paragraph(escape(body), STYLES["body"]))
    blocks.extend(Paragraph(f"- {escape(item)}", STYLES["bullet"]) for item in bullets)
    blocks.append(Spacer(1, 2.2))
    return KeepTogether(blocks)


def page_frame(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(BLUE)
    canvas.setLineWidth(1.2)
    canvas.line(16 * mm, height - 11 * mm, width - 16 * mm, height - 11 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.2)
    canvas.drawString(16 * mm, 9 * mm, "Shine Bo Bo | Resume")
    page_label = f"Page {doc.page}"
    canvas.drawRightString(width - 16 * mm, 9 * mm, page_label)
    canvas.restoreState()


def make_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=16 * mm,
        bottomMargin=15 * mm,
        title="Shine Bo Bo - Resume",
        author="Shine Bo Bo",
        subject="Software and Digital Engineering internship resume",
        creator="Shine Bo Bo portfolio",
    )

    story = []
    story.append(Paragraph("SHINE BO BO", STYLES["name"]))
    story.append(Paragraph("COMPUTER SCIENCE GRADUATE | THIRD-YEAR DIGITAL ENGINEERING STUDENT", STYLES["tagline"]))
    story.append(
        Paragraph(
            "Kathu, Phuket, Thailand | +66 61 858 1574 | "
            "<link href='mailto:shinebobo648@gmail.com' color='#2563EB'>shinebobo648@gmail.com</link>",
            STYLES["contact"],
        )
    )
    story.append(
        Paragraph(
            "<link href='https://portfolio-shinebobo.vercel.app' color='#2563EB'>portfolio-shinebobo.vercel.app</link> | "
            "<link href='https://github.com/ShineBo' color='#2563EB'>github.com/ShineBo</link> | "
            "<link href='https://www.linkedin.com/in/s02bb/' color='#2563EB'>linkedin.com/in/s02bb</link>",
            STYLES["contact"],
        )
    )
    story.append(Spacer(1, 6))

    section(story, "Professional Summary")
    story.append(
        Paragraph(
            escape(
                "Computer Science graduate and third-year Digital Engineering student with hands-on project experience across full-stack web applications, backend APIs, AI/ML prototypes, and IoT simulation. Combines project-based technical learning with international student leadership, cross-cultural workshops, and practical custom-PC and customer-service experience. Seeking software development, full-stack/backend, or digital engineering internship and junior opportunities."
            ),
            STYLES["body"],
        )
    )

    section(story, "Education")
    story.append(
        entry(
            "Bachelor of Engineering (Digital Engineering), International Program",
            "Prince of Songkla University, Phuket Campus | 2024-Present | GPA 4.00",
            [
                "Third-year student in a project-based program spanning software, networks and security, computer architecture, electronics, IoT, project management, and quality assurance.",
                "Outstanding Academic Performance Award recipient for academic year 2024, first-year Digital Engineering.",
            ],
        )
    )
    story.append(
        entry(
            "Bachelor of Science in Computer Science",
            "Myanmar Institute of Theology, Liberal Arts Program | 2021-2025 | GPA 3.74",
            [
                "Built foundations in programming, software and web development, databases, operating systems, and computer systems.",
                "Completed interdisciplinary study in English, Korean basics, management, economics, ethics, human rights, gender and social studies, counselling, religions, peace education, wellbeing, and civic life.",
            ],
        )
    )

    section(story, "Project-Based Technical Skills")
    skill_lines = [
        ("Programming", "TypeScript, JavaScript, Python, Java, PHP, C++, SQL, HTML, CSS"),
        ("Frameworks and interfaces", "React, Next.js, Tailwind CSS, Node.js, Express, NestJS, FastAPI, Flask, Spring Boot, Laravel, Streamlit"),
        ("Data and machine learning", "PostgreSQL, MySQL, MongoDB/Mongoose, Sequelize, SQLAlchemy, pandas, scikit-learn, TensorFlow/Keras"),
        ("IoT and workflow", "ESP32, MQTT, PlatformIO, Wokwi, Git, GitHub, Postman, Vercel"),
        ("Hardware and foundations", "PC component selection, compatibility planning, custom PC assembly, troubleshooting; networking, cybersecurity, cryptography, and computer architecture coursework"),
    ]
    for label, details in skill_lines:
        story.append(
            Paragraph(
                f"<b>{escape(label)}:</b> {escape(details)}",
                STYLES["body"],
            )
        )
    story.append(Paragraph("Skills reflect project, coursework, or hands-on work exposure - not claims of professional mastery.", STYLES["small"]))

    section(story, "Experience")
    story.append(
        entry(
            "President",
            "PSU Phuket International Student Club | Current",
            [
                "Lead intercultural student engagement and coordinate with students and university stakeholders around club activities.",
                "Represent international-student perspectives and encourage inclusive participation in campus life.",
            ],
        )
    )
    story.append(
        entry(
            "Research Intern - Flower Classification",
            "Myanmar Institute of Theology, Liberal Arts Program | Jan-Jul 2025",
            [
                "Prepared five-class image data and trained and evaluated a MobileNetV2 transfer-learning workflow.",
                "Documented results and built a Streamlit interface for prediction testing.",
            ],
        )
    )
    story.append(
        entry(
            "Freelance Gaming PC Buyer, Builder and Reseller",
            "Self-Employed / Family Business | Jan 2022-Jul 2024",
            [
                "Matched parts to customer needs, budgets, and compatibility constraints; assembled systems and performed setup, diagnostics, and troubleshooting.",
                "Handled sourcing, pricing, negotiation, customer communication, delivery, and basic after-sales support.",
            ],
        )
    )
    story.append(
        entry(
            "Logistics and Delegate Servicing Team Member",
            "AIESEC in Myanmar | Feb 2022-Jan 2023",
            [
                "Supported youth-led events through logistics, delegate servicing, and participant-facing operations.",
                "Collaborated across functions and adapted to changing on-site needs.",
            ],
        )
    )

    story.append(PageBreak())

    section(story, "Selected Projects")
    story.append(
        entry(
            "Real Estate Management System",
            "Team coursework | Next.js, TypeScript, NestJS, PostgreSQL, Sequelize, JWT | 2025",
            [
                "Contributed to buyer/dealer registration, role-based dashboards, authentication, property listings, and client/API integration across separate frontend and backend repositories.",
            ],
        )
    )
    story.append(
        entry(
            "Cupidy",
            "External contributor | Python, FastAPI, SQLAlchemy, PostgreSQL, JWT | 2024",
            [
                "Contributed 25 GitHub-attributed commits covering signup/sign-in, user details, photo upload, matching, likes, schemas, models, repositories, and database setup.",
            ],
        )
    )
    story.append(
        entry(
            "Movie Recommendation Prototype",
            "External contributor | React, Flask, pandas, scikit-learn, Streamlit | 2024",
            [
                "Contributed eight public implementation commits spanning content-based recommendation experiments, Flask integration, React result/detail flows, and a Streamlit test interface.",
            ],
        )
    )
    story.append(
        entry(
            "Portfolio Website",
            "Owner | Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Vercel | 2026",
            [
                "Designed and deployed a responsive, data-driven portfolio with accessible interactions, motion preferences, theming, metadata, and documented project evidence.",
            ],
        )
    )
    story.append(
        entry(
            "Flower Classification Research Prototype",
            "Owner | Python, TensorFlow, MobileNetV2, Streamlit, OpenCV | 2025",
            [
                "Built a five-class transfer-learning workflow with preprocessing, model checkpoints, evaluation visualizations, and a small inference interface.",
            ],
        )
    )
    story.append(
        entry(
            "Smart HVAC IoT Controller",
            "Owner | C++, ESP32, PlatformIO, Wokwi, MQTT, DHT22 | 2025",
            [
                "Implemented COOL, HEAT, and IDLE states, automatic/manual modes, temperature hysteresis, and MQTT publishing in a repeatable ESP32 simulation.",
            ],
        )
    )

    section(story, "Leadership and Activities")
    story.append(
        entry(
            "Selected PSU Delegate - Asian Undergraduate Symposium 2026",
            "NUS College, Singapore | 6-18 Jul 2026",
            [
                "Represented PSU's College of Computing in the 'Communities in Action' regional program with undergraduates from across Asia.",
            ],
        )
    )
    story.append(
        entry(
            "JASSO-Supported Participant - Asia Design Global Workshop 2025",
            "Shibaura Institute of Technology, Tokyo | 31 Jul-7 Aug 2025",
            [
                "Collaborated in a multicultural design team through ideation, field research, proposal/model development, and final presentation work.",
            ],
        )
    )
    story.append(
        entry(
            "Data Analysis and Visualization Workshops",
            "PSU Phuket with SIT, Sojo, OMU and Shunan | 2024 and 2025",
            [
                "Joined two international short-term exchanges combining data work, English-language collaboration, presentations, and cultural exchange.",
            ],
        )
    )
    story.append(
        Paragraph(
            "<b>Additional engagement:</b> 230 recorded PSU activity hours (100 required); supporting actor and video editor for the MIT One Billion Rising project; guest speaker for AIESEC's 'Youth &amp; Mental Health' podcast for World Mental Health Day 2023; local youth-community volunteer.",
            STYLES["body"],
        )
    )

    section(story, "Languages")
    story.append(Paragraph("<b>Burmese:</b> Native | <b>English:</b> Fluent | <b>Korean:</b> Basic coursework", STYLES["body"]))

    doc.build(story, onFirstPage=page_frame, onLaterPages=page_frame)
    return OUTPUT


if __name__ == "__main__":
    generated = make_resume()
    width = stringWidth(generated.name, "Helvetica", 8)
    print(f"Generated {generated} ({width:.1f}pt filename width)")
