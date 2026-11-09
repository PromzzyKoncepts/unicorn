type Organisation = {
  slug: string;
  name: string;
  website: string;
  logo: string;
  focus: string;
  description: string;
  photoSource: string;
  photoAlt: string;
};

export const cofi = {
  slug: "cofi",
  name: "Chris Oyakhilome Foundation International (COFI)",
  website: "https://www.cofingo.org/",
  logo: "/agencies/cofi.png",
  focus: "Humanitarian Foundation",
  description: "COFI brings together seven member agencies working across education, healthcare, humanitarian relief, youth leadership, mental well-being and community outreach.",
  photoSource: "https://www.pexels.com/photo/people-sorting-donations-6994963/",
  photoAlt: "Volunteers sorting supplies at a donation centre",
} satisfies Organisation;

export const cofiAgencies = [
  {
    slug: "innercity-mission",
    name: "InnerCity Mission for Children",
    website: "https://theinnercitymission.ngo/",
    logo: "/agencies/icm-logo.png",
    focus: "Children & Families",
    description: "Helps children and families facing poverty access education, nutritious food, healthcare and practical family support.",
    photoSource: "https://www.pexels.com/photo/photo-of-a-group-of-children-in-a-classroom-14554004/",
    photoAlt: "Children taking part in a classroom lesson",
  },
  {
    slug: "volunteer-medical-corps",
    name: "Volunteer Medical Corps",
    website: "https://volunteermedicalcorps.org/",
    logo: "/agencies/vmc-logo.png",
    focus: "Medical Outreach",
    description: "Mobilises health professionals, students and other volunteers to deliver medical outreach and assistance in communities with limited access to care.",
    photoSource: "https://www.pexels.com/photo/woman-having-a-check-up-3992806/",
    photoAlt: "A doctor speaking with a patient during a consultation",
  },
  {
    slug: "trauma-care-international",
    name: "Trauma Care International Foundation",
    website: "https://traumacareinternational.org/",
    logo: "/agencies/trauma-logo.png",
    focus: "Emergency Response",
    description: "Works to improve trauma care and emergency response through health education, advocacy and community programmes.",
    photoSource: "https://www.pexels.com/photo/women-practicing-cpr-on-dummies-in-training-session-34104789/",
    photoAlt: "Participants practising CPR on training mannequins",
  },
  {
    slug: "future-africa-leaders",
    name: "Future Africa Leaders Foundation",
    website: "https://www.futureafricaleadersfoundation.org/",
    logo: "/agencies/falf-logo.jpeg",
    focus: "Youth Leadership",
    description: "Supports young African leaders through mentoring, education and recognition for work that makes a difference in their communities.",
    photoSource: "https://www.pexels.com/photo/group-of-students-attending-classes-for-adults-5756759/",
    photoAlt: "Adult learners taking part in a guided group discussion",
  },
  {
    slug: "mind-management-foundation",
    name: "Mind Management Foundation",
    website: "https://mindmanagementfoundation.org/",
    logo: "/agencies/mmf-logo.png",
    focus: "Mental Well-being",
    description: "Promotes mental health awareness and gives individuals and communities practical tools to support their well-being.",
    photoSource: "https://www.pexels.com/photo/people-attending-a-group-therapy-meeting-5710923/",
    photoAlt: "A group seated together during a facilitated discussion",
  },
  {
    slug: "humanitarian-volunteer-network",
    name: "Humanitarian Volunteer Network",
    website: "https://hvn.theinnercitymission.ngo/",
    logo: "/agencies/hvn-logo.png",
    focus: "Volunteer Service",
    description: "Connects volunteers and partners with opportunities to help provide food, education, healthcare and other essentials for children and families.",
    photoSource: "https://www.pexels.com/photo/volunteers-preparing-donations-6995212/",
    photoAlt: "Volunteers preparing food donations",
  },
  {
    slug: "bible-for-all-missions",
    name: "Bible For All Missions",
    website: "https://pastorchrisonline.org/bible_for_all_missions.php",
    logo: "/agencies/bfam-logo.png",
    focus: "Faith Outreach",
    description: "Helps people access the Bible in languages and formats they can understand through translation, production and distribution.",
    photoSource: "https://www.pexels.com/photo/close-up-shot-of-a-bible-8814959/",
    photoAlt: "An open Bible on a wooden table",
  },
] satisfies Organisation[];

export const humanitarianOrganisations = [cofi, ...cofiAgencies];

export function agencyPath(slug: string) {
  return `/agencies/${slug}`;
}

export function agencyPhoto(slug: string) {
  return `/agencies/photos/${slug}.jpg`;
}

