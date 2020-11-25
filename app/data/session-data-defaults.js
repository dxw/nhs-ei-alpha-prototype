/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  footerMenu: [
    {
      name: "About us",
      url: "#"
    },
    {
      name: "Contact us",
      url: "#"
    },
    {
      name: "Statistics",
      url: "#"
    },
    {
      name: "Patient involvement",
      url: "/get-involved"
    },
    {
      name: "System guidance and processes",
      url: "#"
    },
    {
      name: "Jobs",
      url: "#"
    },
    {
      name: "Transparency and legal",
      url: "#"
    },
    {
      name: "Complaints",
      url: "#"
    }
  ],
  news_one: [
    {
      title: "NHS to introduce ‘one stop shops’ in the community for life saving checks",
      url: "https://www.england.nhs.uk/2020/10/nhs-to-introduce-one-stop-shops-in-the-community-for-life-saving-checks/",
      date: " 1 October 2020"
    },
    {
      title: "NHS becomes the world’s first national health system to commit to become ‘carbon net zero’, backed by clear deliverables and milestones",
      url: "https://www.england.nhs.uk/2020/10/nhs-becomes-the-worlds-national-health-system-to-commit-to-become-carbon-net-zero-backed-by-clear-deliverables-and-milestones/",
      date: "1 October 2020"
    },
    {
      title: "Nursing boost for England’s NHS",
      url: "https://www.england.nhs.uk/2020/09/nursing-boost-for-englands-nhs/",
      date: "21 September 2020"
    }
  ],
  news_two: [
    {
      title: "Prime time telly boost for NHS jobs",
      url: "https://www.england.nhs.uk/2020/09/prime-time-telly-boost-for-nhs-jobs/",
      date: "30 September 2020"
    },
    {
      title: "Surge in people checking their risk of type 2 diabetes",
      url: "https://www.england.nhs.uk/2020/09/surge-in-people-checking-their-risk-of-type-2-diabetes/",
      date: "28 September 2020"
    },
    {
      title: "NHS announces independent review into gender identity services for children and young people",
      url: "https://www.england.nhs.uk/2020/09/nhs-announces-independent-review-into-gender-identity-services-for-children-and-young-people/",
      date: "22 September 2020"
    }
  ],
  news_three: [
  {
    title: "NHS announces independent review into gender identity services for children and young people",
    url: "https://www.england.nhs.uk/2020/09/nhs-announces-independent-review-into-gender-identity-services-for-children-and-young-people/",
    date: "22 September 2020"
  },
  {
    title: "Nursing boost for England’s NHS",
    url: "https://www.england.nhs.uk/2020/09/nursing-boost-for-englands-nhs/",
    date: "21 September 2020"
  }],
  publication_one: [
    {
      title: "Data Protection Impact Assessment: National Immunisation, Vaccination System (NIVS)",
      url: "#",
      date: "17 November 2020",
      verb: "Published",
      pubType: "Guidance",
      docType: "PDF",
      labelClass: "orange"
    },
    {
      title: "COVID-19 therapy: corticosteroids including dexamethasone and hydrocortisone",
      url: "#",
      date: "13 November 2020",
      verb: "Updated",
      pubType: "Letter",
      docType: "PDF",
      labelClass: "blue"
    },
    {
      title: "Case study: St. George’s University Hospitals NHS Foundation Trust: Occupational health and wellbeing",
      url: "#",
      date: "13 November 2020",
      verb: "Published",
      pubType: "Case study",
      docType: "HTML",
      labelClass: "green"
    }
  ],
  publication_two: [
    {
      title: "Primary Medical Care Policy and Guidance Manual – Annex B: sub contracting of clinical services under GMS contracts",
      url: "#",
      date: "12 November 2020",
      verb: "Published",
      pubType: "Guidance",
      docType: "PDF",
      labelClass: "orange"
    },
    {
      title: "Primary Medical Care Policy and Guidance Manual – Annex A: sub contracting of clinical services under GMS contracts",
      url: "#",
      date: "12 November 2020",
      verb: "Published",
      pubType: "Guidance",
      docType: "PDF",
      labelClass: "orange"
    },
    {
      title: "Primary Medical Care Policy and Guidance Manual – Annex 17: novation agreement",
      url: "#",
      date: "12 November 2020",
      verb: "Published",
      pubType: "Template",
      docType: "PDF",
      labelClass: "pink"
    }
  ],
  our_priorities: [
    {
      title: "Cancer",
      description: "Find out what we are doing to improve cancer services in England.",
      url: "#"
    },
    {
      title: "Coronavirus",
      description: "View the latest Coronavirus content",
      url: "#"
    },
    {
      title: "Diabetes",
      description: "Improve outcomes for those with diabetes.",
      url: "#"
    },
    {
      title: "End of life care",
      description: "Details around palliative and end of life care",
      url: "#"
    },
    {
      title: "Friends and family test",
      description: "Patient feedback tool of services and experiences",
      url: "#"
    },
    {
      title: "Genomics",
      description: "Study of the body’s genes, their functions and their influence on the body",
      url: "#"
    },
    {
      title: "Health System Support (HSS) framework",
      description: "Find out more about the HSS framework.",
      url: "#"
    },
    {
      title: "Learning disabilities",
      description: "Making health and care services better for people with a learning disability",
      url: "#"
    },
    {
      title: "Mental health",
      description: "Working to transform mental health services",
      url: "#"
    },
    {
      title: "Medicines",
      description: "",
      url: "#"
    },
    {
      title: "Rightcare",
      description: "Diagnosis of data and evidence across that population",
      url: "#"
    },
    {
      title: "Shared decision making",
      description: "supporting individuals to make decisions that are right for them",
      url: "#"
    },
    {
      title: "Urgent and emergency care",
      description: "Ensuring patients get the right care in the right place.",
      url: "#"
    }
  ],
  nhs_people_plan: [
    {
      title: "Download: People Plan for 2020/2021",
      description: "This plan sets out actions to support transformation across the whole NHS.",
      url: "#"
    },
    {
      title: "Our NHS People Promise",
      description: "Sets out what our NHS people can expect from their leaders and from each other.",
      url: "#"
    },
    {
      title: "Support for the People Plan",
      description: "Support from our partners within health and social care",
      url: "#"
    },
    {
      title: "People stories",
      description: "Read stories from across the NHS",
      url: "#"
    },
    {
      title: "Chief People Officer Bulletin",
      description: "Receive the latest updates on the aspirations of the NHS People Plan",
      url: "#"
    }
  ],
  improvement_hub: [
    {
      title: "Search the Improvement Hub",
      description: "Description of section",
      url: "#"
    },
    {
      title: "About the Improvement Hub",
      description: "Description of section",
      url: "#"
    },
    {
      title: "Sustainable Improvement Team",
      description: "Description of section",
      url: "#"
    }
  ],
  improvement: [
    {
      title: "Patient safety",
      description: "",
      url: "#"
    },
    {
      title: "Safeguarding",
      description: "",
      url: "#"
    },
    {
      title: "Sustainable improvement",
      description: "",
      url: "#"
    },
    {
      title: "Insights platform",
      description: "",
      url: "#"
    },
    {
      title: "Always events",
      description: "",
      url: "#"
    },
    {
      title: "Evidence based interventions",
      description: "",
      url: "#"
    },
    {
      title: "7 day hospital services",
      description: "",
      url: "#"
    },
    {
      title: "Winter",
      description: "",
      url: "#"
    },
    {
      title: "NHS Accelerated Access Collaborative (AAC)",
      description: "",
      url: "#"
    },
    {
      title: "A greener NHS",
      description: "",
      url: "#"
    }
  ],
  about_us_pages: [
    {
      title: "What we do",
      url: "#",
      intro: "Introduction content explaining what is it that the person will find on the next page"
    },
    {
      title: "Our work",
      url: "#",
      intro: "Learn more about what we’re doing for cancer, primary care, mental health, urgent and emergency care and other key areas of the NHS."
    },
    {
      title: "Corporate publications",
      url: "#",
      intro: "Read our annual report, business plan and financial performance reports."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Equality and diversity and health inequalities",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },
    {
      title: "Working for us",
      url: "#",
      intro: "Find out about our wide range of roles and how you can make a difference to healthcare in England."
    },


  ],
  about_us_intro: [
    {
      pageTitle: "About NHS England and Improvement",
      p1: "From 1 April 2019 NHS England and NHS Improvement came together as a single organisation. We set the strategic direction for the NHS through the NHS Long Term Plan and fund key priorities for improvement.",
      p2: " We are also responsible for overseeing NHS foundation trusts, NHS trusts and some independent providers. We support them to give patients consistently safe, high quality, and responsive care within local integrated care systems that are financially sustainable. By holding providers to account and, where necessary, intervening, we help the NHS to meet its operational goals and its longer term strategy."
    }
  ]

}
