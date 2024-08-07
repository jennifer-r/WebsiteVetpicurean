const products = [
  {
    id: 1,
    title: "Chubby Gummy Basic",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/0Cq3gt1/BASIC.png"
  },
  {
    id: 2,
    title: "Chubby Gummy Collabery",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/3hQpWKm/Collaberry.png"
  },
  {
    id: 3,
    title: "Chubby Gummy Mom",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/yYt26Y4/MOM.png"
  },
  {
    id: 4,
    title: "Chubby Gummy Essentials",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/4jRQ680/ESSEN.png"
  },
  {
    id: 5,
    title: "Chubby Gummy Tummy",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/7Gc0MbZ/TUMMY.png"
  },
  {
    id: 6,
    title: "Chubby Gummy Urigoel",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/YL6wV4q/Urigoel.png"
  },
  {
    id: 7,
    title: "FP Milk Cleanser 150ml",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/YhbDRZq/FP-MCR150.png"
  },
  {
    id: 8,
    title: "FP Milk Cleanser 60ml",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/hcVRmmh/FP-MCR-60.png"
  },
  {
    id: 9,
    title: "FP Stain Remover Powder 25g",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/R9PL23r/FP-Pow.png"
  },
  {
    id: 10,
    title: "Chubby Balme Fungee",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/r5KPGk3/Balme.png"
  },
  {
    id: 11,
    title: "Goat up! 90g Jar",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/ZTWsRm0/GU-90.png"
  },
  {
    id: 12,
    title: "Goat up! 30g Pouch",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/zQ3CtX8/GU-30.png"
  },
  {
    id: 13,
    title: "Booster Broth",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/KXBCW5b/Booster-Broth.png"
  },
  {
    id: 14,
    title: "Chubby Gummy Basic Big Dog Edition",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/FKpdHkj/BASIC-DOG.png"
  },
  {
    id: 15,
    title: "Chubby Gummy Collaberry Big Dog Edition",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/4F6BX6V/Colla-Dog.png"
  },
  {
    id: 16,
    title: "Chubby Gummy Essentials Big Dog Edition",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/0CVrmTn/ESSEN-Dog.png"
  },
  {
    id: 17,
    title: "Gum Dog Tummy",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/SmTntBZ/TUMMY-Dog.png"
  },
  {
    id: 18,
    title: "Chubby Gummy Dog Urigoel",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/c6Nc9m2/Uri-Dog.png"
  },
  {
    id: 19,
    title: "[BUNDLE] Dobule Basic",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/WzHW6dn/Bundle-Double-Basic.png"
  },
  {
    id: 20,
    title: "[BUNDLE] Chonky Gummy",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/MP0vvDJ/Bundle-Chongky.png"
  },
  {
    id: 21,
    title: "[BUNDLE] Glowing Gummy",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/G71vZbb/Bundle-Glowing.png"
  },
  {
    id: 22,
    title: "[BUNDLE] Happy Tummy",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/HTSVpyx/Bundle-Happy-Tummy.png"
  },
  {
    id: 23,
    title: "[BUNDLE] Double Tummy",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/vm3b8wP/Bundle-Double-Tummy.png"
  },
  {
    id: 24,
    title: "[BUNDLE] Dobule Collaberry",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/7RpG1Yb/Bundle-Glowing-2.png"
  },
  {
    id: 25,
    title: "[BUNDLE] Dobule Urigoel",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/2jTwSsn/Bundle-URI.png"
  },
  {
    id: 26,
    title: "[BUNDLE] Urigoel - Essentials",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/h2sJy35/Bundle-UTI.png"
  },
  {
    id: 27,
    title: "[BUNDLE] Urigoel - Tummy",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/CHDgPwR/Bundle-Vet-ed.png"
  },
  {
    id: 28,
    title: "[BUNDLE] Complete Basic",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/ph2jnpk/Bundle-Complete-Basic.png"
  },
  {
    id: 29,
    title: "[BUNDLE] Complete Mom",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/x1b0rq1/Bundle-Complete-Mom.png"
  },
  {
    id: 30,
    title: "[BUNDLE] FP Milk Cleanser + Stain Powder",
    description: "yeyeyeye",
    alt: "First",
    src: "https://i.ibb.co.com/hXf6vvj/Bundle-FP-150.png"
  },
  {
    id: 31,
    title: "[BUNDLE] Milk Cleanser 150ml + Stain Powder 25g",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/nkpQ6Rm/Bundle-FP-150-2.png"
  },
  {
    id: 32,
    title: "[BUNDLE] Milk Cleanser 60ml + Stain Powder 25g",
    description: "Y",
    alt: "Third",
    src: "https://i.ibb.co.com/HhYpxxC/Bundle-FP-60.png"
  },
];

export default products;