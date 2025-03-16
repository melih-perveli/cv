import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import picture from "./assets/WhatsApp Görsel 2025-02-28 saat 17.35.35_360c3ea8.jpg";

import yapikrediLogo from "./assets/yapikredi.png";
import trtLogo from "./assets/trt.png";
import fimpleLogo from "./assets/fimple.png";
import fituneLogo from "./assets/fitune.png";
import qchargeLogo from "./assets/qCharge.png";
import trtIzleLogo from "./assets/TRT_İzle_logo.png";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#F1F5F9",
    padding: 0,
    fontFamily: "Roboto",
    position: "relative",
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
  },
  header: {
    backgroundColor: "#DBEAFE",
    padding: 12,
    flexDirection: "row",
    marginBottom: 20,
    position: "relative",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#DBEAFE",
  },
  photoContainer: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    marginRight: 15,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  headerContent: {
    flexDirection: "column",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E40AF",
    marginBottom: 4,
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 12,
    color: "#1E40AF",
    opacity: 0.9,
    marginBottom: 10,
    fontFamily: "Roboto",
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 5,
  },
  contactBadge: {
    backgroundColor: "#BFDBFE",
    padding: "3 6",
    borderRadius: 15,
    fontSize: 8,
    color: "#1E40AF",
    fontFamily: "Roboto",
  },
  mainContent: {
    flexDirection: "row",
    padding: "0 14",
  },
  leftColumn: {
    width: "33%",
    marginRight: 12,
  },
  rightColumn: {
    width: "67%",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    position: "relative",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#3B82F6",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  sectionTitleAmber: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B45309",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  sectionContent: {
    fontSize: 9,
    color: "#4B5563",
    lineHeight: 1.3,
    fontFamily: "Roboto",
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 4,
    marginTop: 6,
    fontFamily: "Roboto",
  },
  skillCategoryFirst: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 4,
    marginTop: 2,
    fontFamily: "Roboto",
  },
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillBlue: {
    backgroundColor: "#EFF6FF",
    padding: "2 5",
    borderRadius: 8,
    fontSize: 8,
    color: "#3B82F6",
    fontFamily: "Roboto",
  },
  skillTeal: {
    backgroundColor: "#F0FDFA",
    padding: "2 5",
    borderRadius: 8,
    fontSize: 8,
    color: "#0D9488",
    fontFamily: "Roboto",
  },
  skillPurple: {
    backgroundColor: "#F5F3FF",
    padding: "2 5",
    borderRadius: 8,
    fontSize: 8,
    color: "#7C3AED",
    fontFamily: "Roboto",
  },
  skillAmber: {
    backgroundColor: "#FFFBEB",
    padding: "2 5",
    borderRadius: 8,
    fontSize: 8,
    color: "#D97706",
    fontFamily: "Roboto",
  },
  educationItem: {
    marginBottom: 4,
  },
  educationTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#4B5563",
    fontFamily: "Roboto",
  },
  educationDate: {
    fontSize: 7,
    color: "#9CA3AF",
    fontFamily: "Roboto",
    marginLeft: 5,
  },
  educationSubtitle: {
    fontSize: 8,
    color: "#B45309",
    marginBottom: 1,
    fontFamily: "Roboto",
  },
  educationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  experienceContainer: {
    marginBottom: 6,
    paddingLeft: 20,
    position: "relative",
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4B5563",
    fontFamily: "Roboto",
  },
  experienceDate: {
    fontSize: 8,
    backgroundColor: "#EFF6FF",
    color: "#3B82F6",
    padding: "3 8",
    borderRadius: 15,
    fontFamily: "Roboto",
  },
  experienceCompany: {
    fontSize: 10,
    color: "#3B82F6",
    fontWeight: "medium",
    marginBottom: 5,
    fontFamily: "Roboto",
  },
  experienceDescription: {
    fontSize: 8,
    color: "#4B5563",
    lineHeight: 1.3,
    marginBottom: 4,
    fontFamily: "Roboto",
  },
  projectContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  projectLogo: {
    width: 42,
    marginRight: 8,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  projectContent: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#3B82F6",
    fontFamily: "Roboto",
    lineHeight: 1.4,
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 8,
    color: "#4B5563",
    lineHeight: 1.5,
    fontFamily: "Roboto",
  },
  timeline: {
    position: "absolute",
    left: 10,
    top: 0,
    bottom: 0,
    width: 1.5,
    backgroundColor: "#93C5FD",
  },
  timelineDot: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#3B82F6",
    transform: "translateX(-2.5%)",
  },
});

const BackgroundPattern = () => <View style={styles.backgroundPattern}></View>;

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <BackgroundPattern />
      <View style={styles.header}>
        <View style={styles.headerBackground} />

        <View style={styles.photoContainer}>
          <Image src={picture} style={styles.photo} />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.name}>Melih Perveli</Text>
          <Text style={styles.title}>Senior Frontend Developer</Text>

          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Text style={styles.contactBadge}>melihperveli@windowslive.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactBadge}>+90 542 835 0793</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactBadge}>Nilüfer, Bursa</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactBadge}>16.07.1993</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactBadge}>
                Turkish (Native), English (Professional)
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.sectionContent}>
              My academic background and the choices I made during my university
              education steered me towards marketing and sales. However, I was
              not feeling fulfilled. Wanting to turn a new page in my career, I
              took a significant risk and decided to become a software
              developer. Thanks to my previous experience in team management, I
              am currently leading a team. My past sales experience now helps me
              better understand user needs and create more effective interfaces.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>

            <Text style={styles.skillCategoryFirst}>
              Frameworks & Libraries
            </Text>
            <View style={styles.skillContainer}>
              {[
                "React",
                "Vue",
                "Svelte",
                "Next.js",
                "Nuxt",
                "TypeScript",
                "JavaScript",
              ].map((skill) => (
                <Text key={skill} style={styles.skillBlue}>
                  {skill}
                </Text>
              ))}
            </View>

            <Text style={styles.skillCategory}>State Management & APIs</Text>
            <View style={styles.skillContainer}>
              {[
                "Redux",
                "Zustand",
                "Pinia",
                "Vuex",
                "React Query",
                "Axios",
              ].map((skill) => (
                <Text key={skill} style={styles.skillTeal}>
                  {skill}
                </Text>
              ))}
            </View>

            <Text style={styles.skillCategory}>Development Tools</Text>
            <View style={styles.skillContainer}>
              {[
                "Git",
                "Webpack",
                "Vite",
                "Chart.js",
                "HTML/CSS",
                "TailwindCSS",
              ].map((skill) => (
                <Text key={skill} style={styles.skillPurple}>
                  {skill}
                </Text>
              ))}
            </View>

            <Text style={styles.skillCategory}>Design & Other</Text>
            <View style={styles.skillContainer}>
              {[
                "Responsive Design",
                "Accessibility",
                "Figma",
                "UI/UX",
                "Performance",
              ].map((skill) => (
                <Text key={skill} style={styles.skillAmber}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitleAmber}>EDUCATION</Text>

            <View style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.educationTitle}>Uludağ University</Text>
                <Text style={styles.educationDate}>2014 - 2018</Text>
              </View>
              <Text style={styles.educationSubtitle}>
                Bachelor of Business Administration
              </Text>
            </View>

            <View style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.educationTitle}>BTK Akademi</Text>
                <Text style={styles.educationDate}>2022</Text>
              </View>
              <Text style={styles.educationSubtitle}>
                Advanced JavaScript & Modern CSS Development
              </Text>
            </View>

            <View style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.educationTitle}>Vue Mastery</Text>
                <Text style={styles.educationDate}>2021</Text>
              </View>
              <Text style={styles.educationSubtitle}>
                Vue.js 3 Production-Ready Applications
              </Text>
            </View>

            <View style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.educationTitle}>Frontend Masters</Text>
                <Text style={styles.educationDate}>2020</Text>
              </View>
              <Text style={styles.educationSubtitle}>
                JavaScript: The Hard Parts & Async Patterns
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>

            <View>
              <View style={{ ...styles.timeline, left: 10 }} />
              <View style={styles.experienceContainer}>
                <View style={{ ...styles.timelineDot, top: 6, left: 10 }} />
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>Frontend Developer</Text>
                  <Text style={styles.experienceDate}>Apr 2022 - Present</Text>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={fimpleLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      Fimple (3Pounds Project - Team & Technical Lead)
                    </Text>
                    <Text style={styles.projectDescription}>
                      09/24 - 02/25 A configurable white-label banking solution
                      with customizable themes and multilingual support for
                      financial institutions
                    </Text>
                  </View>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={yapikrediLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      YapıKredi Bank (3Pounds Project - Team Lead)
                    </Text>
                    <Text style={styles.projectDescription}>
                      05/23 - 08/24 Web and backoffice construction of YapıKredi
                      bank, which opened a branch in Germany
                    </Text>
                  </View>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={fituneLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      Fitune (3Pounds Project - Team & Technical Lead)
                    </Text>
                    <Text style={styles.projectDescription}>
                      08/23 - 02/24 A website construction that creates a
                      website with artificial intelligence support in under 30
                      seconds and makes it ready to be published in a fully
                      editable way
                    </Text>
                  </View>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={qchargeLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      Qcharge (3Pounds Project - Solo Developer)
                    </Text>
                    <Text style={styles.projectDescription}>
                      01/23 - 12/23 A business that enables the management and
                      installation of electric vehicle charging stations
                    </Text>
                  </View>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={trtIzleLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      TRT İzle TVOS (3Pounds Project - Solo Developer)
                    </Text>
                    <Text style={styles.projectDescription}>
                      06/22 - 08/22 Implemented Google Ad integration for the
                      tvOS application
                    </Text>
                  </View>
                </View>

                <View style={styles.projectContainer}>
                  <Image src={trtLogo} style={styles.projectLogo} />
                  <View style={styles.projectContent}>
                    <Text style={styles.projectTitle}>
                      TRT.net.tr (3Pounds Project - Senior Developer)
                    </Text>
                    <Text style={styles.projectDescription}>
                      04/22 - 01/23 Turkey's official radio and television
                      channel
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.experienceContainer}>
                <View style={{ ...styles.timelineDot, top: 6, left: 10 }} />
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>Frontend Developer</Text>
                  <Text style={styles.experienceDate}>Jun 2021 - Jan 2022</Text>
                </View>
                <Text style={styles.experienceCompany}>
                  eMcBilisim • Istanbul
                </Text>
                <Text style={styles.experienceDescription}>
                  Work experience with a team that designs Ponzi schemes and
                  develops both e-commerce channels and back office channels. In
                  this work experience, I added Vue and TypeScript to my own
                  talent pool.
                </Text>
              </View>

              <View style={styles.experienceContainer}>
                <View style={{ ...styles.timelineDot, top: 6, left: 10 }} />
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>Frontend Developer</Text>
                  <Text style={styles.experienceDate}>Jan 2020 - May 2021</Text>
                </View>
                <Text style={styles.experienceCompany}>
                  Alfa Gama Tasarım • Kocaeli
                </Text>
                <Text style={styles.experienceDescription}>
                  What I try to learn much more as a developer is non-corporate
                  but workload work experience. At this stage, over 100 websites
                  have been developed for SMEs, preparing me for professional IT
                  business.
                </Text>
              </View>

              <View style={styles.experienceContainer}>
                <View style={{ ...styles.timelineDot, top: 6, left: 10 }} />
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>Junior Developer</Text>
                  <Text style={styles.experienceDate}>Sep 2019 - Jan 2020</Text>
                </View>
                <Text style={styles.experienceCompany}>
                  Kapıda Pazar • Kocaeli
                </Text>
                <Text style={styles.experienceDescription}>
                  Experience of leaving behind a sales career to become a
                  software developer and starting to work as a junior and trying
                  to make mobile applications with react-native.
                </Text>
              </View>

              <View style={styles.experienceContainer}>
                <View style={{ ...styles.timelineDot, top: 6, left: 10 }} />
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>Sales & Marketing</Text>
                  <Text style={styles.experienceDate}>2012 - 2019</Text>
                </View>
                <Text style={styles.experienceCompany}>Various Companies</Text>
                <Text style={styles.experienceDescription}>
                  Progressive career growth from promoter to regional manager in
                  various companies and sectors, gaining extensive experience in
                  sales, marketing, and team management.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
