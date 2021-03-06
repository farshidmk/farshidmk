import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { BsLinkedin, BsFacebook, BsTelegram } from "react-icons/bs";
import { SECTIONS } from "../shared/sections";
import aboutMeText from "shared/aboutMeText";

const Footer = () => {
  return (
    <div className={`${styles.root}`}>
      <div className={`bg-gray ${styles.bgCircle}`}></div>
      <div className={`${styles.hireMeSection} `}>
        <div>
          <p className={`no-margin text-light text-shadow-dark`}>
            ایده ای برای پیاده کردن دارید؟
          </p>
          <p className={`no-margin description-text text-shadow-light`}>
            اگر برای پیاده سازی ایده ی خود نیاز به کمک یا هم فکری دارید. خوشحال
            میشم بتونم کمکی بکنم.
          </p>
        </div>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
          className={`bg-light ${styles.hireMeBtn}`}
        >
          Hire ME
        </a>
      </div>

      <div className={styles.footerSections}>
        <div className={styles.aboutMeSection}>
          <p className={`text-light no-margin ${styles.title}`}>درباره من</p>
          <hr className={`bg-light ${styles.titleDivider}`} />
          <p className="no-margin description-text text-light">{aboutMeText}</p>
        </div>
        <div className={styles.footerColumn}>
          <p className={`text-light no-margin ${styles.title}`}>
            بخش بندی مطالب
          </p>
          <hr className={`bg-light ${styles.titleDivider}`} />
          <ul className={styles.sectionsList}>
            {SECTIONS?.map((section) => (
              <Link key={section.id} href={section.link}>
                <a>
                  <li className={`text-light ${styles.listItem}`}>
                    <span className="margin-left-small">{section.icon}</span>
                    {section.title}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={`text-light no-margin ${styles.title}`}>ارتباط با من</p>
          <hr className={`bg-light ${styles.titleDivider}`} />
          <div className={styles.socialIcon}>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_ADDRESS}
              className="text-light"
            >
              <BsLinkedin />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_ADDRESS}
              className="text-light"
            >
              <BsFacebook />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TELEGRAM_ADDRESS}
              className="text-light"
            >
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
      <hr className={`bg-dark ${styles.divider}`} />
      <p
        className={`no-margin description-text text-light ${styles.copyRightText}`}
      >
        {" "}
        این وبلاگ با استفاده از تکنولوژی{" "}
        <a href="https://nextjs.org/">Next.js</a> ایجاد شده است
      </p>
    </div>
  );
};

export default Footer;
