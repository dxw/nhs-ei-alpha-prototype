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
  guidance: [
    {
      title: "Dementia wellbeing in the COVID-19 pandemic",
      url: "Dementia wellbeing in the COVID-19 pandemic",
      date: "25 September 2020"
    },
    {
      title: "NRLS national patient safety incident reports: commentary (September 2020)",
      url: "https://www.england.nhs.uk/publication/nrls-national-patient-safety-incident-reports-commentary-september-2020/",
      date: "23 September 2020"
    },
    {
      title: "Pharmacy Quality Scheme Guidance 2020/21 (Part 2)",
      url: "https://www.england.nhs.uk/publication/pharmacy-quality-scheme-guidance-2020-21/",
      date: "21 September 2020"
    }
  ],
  policy: [
    {
      title: "Rituximab and eculizumab for the prevention and management of delayed haemolytic transfusion reactions and hyperhaemolysis in patients with haemoglobinopathies",
      url: "https://www.england.nhs.uk/publication/rituximab-and-eculizumab-for-the-prevention-and-management-of-delayed-haemolytic-transfusion-reactions-and-hyperhaemolysis-in-patients-with-haemoglobinopathies/",
      date: "24 September 2020"
    },
    {
      title: "Plerixafor for stem cell mobilisation in adults and children",
      url: "https://www.england.nhs.uk/publication/plerixafor-for-stem-cell-mobilisation-in-adults-and-children/",
      date: "24 September 2020"
    },
    {
      title: "Clinical Commissioning Urgent Policy Statement: Cystic fibrosis modulator therapies access agreement for licensed mutations",
      url: "https://www.england.nhs.uk/publication/clinical-commissioning-urgent-policy-statement-cystic-fibrosis-modulator-therapies-access-agreement-for-licensed-mutations/",
      date: "21 August 2020"
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
    }],
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
    }],
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
    }
  ]
}
