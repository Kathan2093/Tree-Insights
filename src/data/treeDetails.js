const treeDetails = [
  {
    id: 1,
    name: "Banyan Tree",
    scientificName: "Ficus benghalensis",
    description:
      "The Banyan tree is a large, evergreen tree with aerial roots. It is the national tree of India and is known for its massive canopy and longevity. Banyan trees are often considered sacred and are a focal point in many religious and cultural practices across India.",
    uses: "Banyan trees are used for shade, ornamental purposes, and traditional medicine. The leaves, bark, and roots have medicinal properties used in Ayurveda.",
    environment:
      "Banyan trees thrive in tropical and subtropical climates, preferring well-drained soil and full sunlight.",
    image: "https://cdn.hswstatic.com/gif/banyan-tree.jpg",
    type: "Tree",
  },
  {
    id: 2,
    name: "Noni",
    scientificName: "Morinda citrifolia Linn.",
    description:
      "Noni is a shrub known for its medicinal properties and is also called Indian mulberry or Cheese fruit. It belongs to the Rubiaceae family.",
    uses: "Noni is used in Ayurvedic medicine for its sweet and sour taste. It is known to be heavy and oily in nature, with a cooling potency. Noni is beneficial in various health conditions such as diabetes (prameha) and skin diseases (kusthaghna).",
    environment: "",
    image:
      "https://m.media-amazon.com/images/I/61ezOkGMgsL._AC_UF1000,1000_QL80_.jpg",
    type: "Plant",
    vernacularNames: {
      English: "Indian mulberry, Cheese fruit",
      Sanskrit: "Ach",
      Hindi: "Ach",
      Bengali: "Ach",
      Marathi: "Ach",
      Gujarati: "Ach",
      Kannada: "Ach",
      Malayalam: "Ach",
      Tamil: "Ach",
      Telugu: "Ach",
    },
    wikipediaLink: "https://en.wikipedia.org/wiki/Morinda_citrifolia",
    sanskritPhrases: [],
  },
  {
    id: 3,
    name: "Neem Tree",
    scientificName: "Azadirachta indica",
    description:
      "The Neem tree is known for its medicinal properties and is widely used in traditional medicine. Every part of the tree has some utility, making it a valuable plant in Indian culture. Neem is renowned for its antifungal, antibacterial, and antiviral properties.",
    uses: "Neem leaves, bark, and oil are used in traditional medicine, pest control, and skincare products. Neem is also used in agriculture as a natural pesticide.",
    environment:
      "Neem trees grow well in tropical and subtropical regions with well-drained soil. They are drought-resistant and can tolerate high temperatures.",
    image:
      "https://i.pinimg.com/originals/c2/71/e2/c271e24b437c72da12e1879283f9389a.jpg",
    type: "Tree",
  },
  {
    id: 4,
    name: "Mango Tree",
    scientificName: "Mangifera indica",
    description:
      "The Mango tree produces delicious mango fruits, which are popular worldwide. It is a large, evergreen tree with a dense canopy. Mangoes are rich in vitamins and minerals, making them a nutritious fruit.",
    uses: "Mango fruits are consumed fresh, dried, or used in culinary dishes. The wood of the mango tree is used in furniture making, and the leaves are used in religious ceremonies.",
    environment:
      "Mango trees prefer tropical and subtropical climates with well-drained soil. They require full sun and protection from frost.",
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-mango-tree-kesar-grafted-plant.jpg?v=1634223741",
    type: "Tree",
  },
  {
    id: 5,
    name: "Tulsi",
    scientificName: "Ocimum sanctum Linn.",
    description:
      "Tulsi is a perennial herb known for its aromatic smell and medicinal properties. It is widely grown in villages and revered for its spiritual significance.",
    uses: "Used in Ayurvedic medicine for its diverse therapeutic properties including antiasthmatic, antirheumatic, antibacterial, antifungal, antiviral, and anti-inflammatory actions. It is also beneficial in respiratory disorders, fever, skin diseases, and digestive problems.",
    environment: "Found throughout India.",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-09bfd4443a43a9e4de84c90b3323d6c0",
    type: "Plant",
    vernacularNames: {
      Hindi: "Tulsi",
      English: "Holy basil",
      Sanskrit: "Tulasi",
      Gujarati: "Tulsi",
      Malayalam: "Tulasi",
      Bengali: "Tulasi",
      Marathi: "Tulasi",
      Kannada: "Tulasi",
      Tamil: "Tulasi",
      Telugu: "Tulasi",
    },
    wikipediaLink: "https://en.wikipedia.org/wiki/Ocimum_tenuiflorum",
    sanskritPhrases: [
      "तुलस्या ग्राम्या सुलभा बहुमञ्जीरि देवदन्तभुभः।",
      "सुरसा सुलभा अपेतिषक्ष्मभसा च तुलसी।",
      "वार्धकन्याच्च कन्याघतिष्ठातत्वेत्यवन्ति ।",
    ],
  },
  {
    id: 6,
    name: "Peepal Tree",
    scientificName: "Ficus religiosa",
    description:
      "The Peepal tree, also known as the sacred fig, is revered in Hinduism and Buddhism. It is often found near temples and is known for its heart-shaped leaves. The tree has a long lifespan and is considered a symbol of enlightenment and peace.",
    uses: "Peepal leaves, bark, and roots are used in traditional medicine to treat various ailments. The tree is also planted for shade and ornamental purposes.",
    environment:
      "Peepal trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image: "https://boota.pk/wp-content/uploads/2021/01/Peepal-Tree.jpg",
    type: "Tree",
  },
  {
    id: 7,
    name: "Ashoka Tree",
    scientificName: "Saraca asoca",
    description:
      "The Ashoka tree is known for its beautiful foliage and fragrant flowers. It is considered sacred and is associated with love and fertility. The tree has a slender trunk and a dense canopy of leaves, making it a popular ornamental plant.",
    uses: "Ashoka tree bark is used in traditional medicine to treat gynecological disorders. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Ashoka trees grow well in tropical and subtropical climates. They prefer moist, well-drained soil and partial to full sunlight.",
    image:
      "https://m.media-amazon.com/images/I/91Ek2hlBNZL.AC_UF1000,1000_QL80.jpg",
    type: "Tree",
  },
  {
    id: 8,
    name: "Gulmohar Tree",
    scientificName: "Delonix regia",
    description:
      "The Gulmohar tree is known for its flamboyant display of bright red or orange flowers and feathery leaves. It is a fast-growing tree that provides excellent shade. The Gulmohar tree is often planted along roadsides and in gardens for its striking appearance.",
    uses: "Gulmohar trees are primarily used for ornamental purposes. They provide shade and enhance the aesthetic appeal of landscapes.",
    environment:
      "Gulmohar trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun.",
    image:
      "https://growbilliontrees.com/cdn/shop/articles/Gen-Gar-3.png?v=1703231450&width=1100",
    type: "Tree",
  },
  {
    id: 9,
    name: "Sandalwood Tree",
    scientificName: "Santalum album",
    description:
      "The Sandalwood tree is valued for its fragrant wood, which is used in perfumes, incense, and traditional medicine. The tree has a slender trunk and a dense canopy of leaves. Sandalwood oil is extracted from the heartwood and is highly prized for its aroma.",
    uses: "Sandalwood wood and oil are used in perfumes, incense, and traditional medicine. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Sandalwood trees grow well in tropical and subtropical climates. They prefer well-drained soil and partial to full sunlight.",
    image:
      "https://m.media-amazon.com/images/I/81sU022LyWS.AC_UF1000,1000_QL80.jpg",
    type: "Tree",
  },
  {
    id: 10,
    name: "Sal Tree",
    scientificName: "Shorea robusta",
    description:
      "The Sal tree is a large, deciduous tree that is economically important for its timber. It has a straight trunk and a dense canopy of leaves. Sal wood is durable and resistant to termites, making it ideal for construction and furniture making.",
    uses: "Sal wood is used in construction, furniture making, and as fuel. The resin from the tree is used in traditional medicine.",
    environment:
      "Sal trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image:
      "https://www.rachnakar.com/wp-content/uploads/2021/01/IMG_20201115_120731-scaled.jpg",
    type: "Tree",
  },
  {
    id: 11,
    name: "Teak Tree",
    scientificName: "Tectona grandis",
    description:
      "The Teak tree is known for its durable and water-resistant wood, commonly used in furniture making. It has a straight trunk and a dense canopy of leaves. Teak wood is highly valued for its strength, durability, and resistance to pests.",
    uses: "Teak wood is used in furniture making, shipbuilding, and construction. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Teak trees grow well in tropical and subtropical climates. They prefer well-drained soil and full sun.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W9151jparSxLEqGUVRW7DYNcqV4vVMlLBg&s",
    type: "Tree",
  },
  {
    id: 12,
    name: "Jamun Tree",
    scientificName: "Syzygium cumini",
    description:
      "The Jamun tree produces small, dark purple fruits that are sweet and tart. It is a large, evergreen tree with a dense canopy of leaves. Jamun fruits are rich in vitamins and minerals and are used in various culinary dishes and traditional medicine.",
    uses: "Jamun fruits are consumed fresh, made into jams and jellies, or used in traditional medicine. The wood is used for agricultural implements and construction.",
    environment:
      "Jamun trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image: "https://i.ytimg.com/vi/AcyVXchpFJM/maxresdefault.jpg",
    type: "Tree",
  },
  {
    id: 13,
    name: "Aloe vera",
    scientificName: "Aloe vera",
    description:
      "Aloe vera is a perennial dwarf meshy-leaved plant belonging to the family Liliaceae. It is known for its ability to survive with little water and has a cooling effect.",
    uses: "Traditionally used in Ayurvedic medicine for its cooling, rejuvenative, and medicinal properties. It is beneficial in conditions such as jaundice, spleenomegaly, wounds, inflammation, and various skin disorders.",
    environment: "Found all over India.",
    image:
      "https://www.almanac.com/sites/default/files/users/Almanac%20Staff/aloe-vera-cgdeaw_ss_full_width.jpg",
    type: "Plant",
    vernacularNames: {
      Hindi: "Kumari",
      English: "Aloe vera",
      Sanskrit: "Kumari",
      Gujarati: "Kumari",
      Malayalam: "Kattarvazha",
      Bengali: "Kumari",
      Marathi: "Korpad",
      Kannada: "Kumari",
      Tamil: "Kumari",
      Telugu: "Kalabanda",
    },
    wikipediaLink: "https://en.wikipedia.org/wiki/Aloe_vera",
    sanskritPhrases: [
      "कुमारयति क्रीडिते स्वल्पेन अपि जलेन शीतत्वादि रसना - कुमारीः क्रीडायाम्।",
      "स्थूलदला - स्थूलदल यस्था सा।",
      "द्रुतकुमारी - घृत्सूक्ता कुमारी इति।",
      "तवपुलस्रवा - तवपुलं बहुस्रावं अस्त्यस्याः।",
      "कन्या - कन्याति कन्यावा रसायनत्वातिगुणाः।",
      "गृहकन्या - गृहे कन्या इव, माधुर्यात् तद्गुणयुक्तात्वात्।",
    ],
  },
  {
    id: 14,
    name: "Kapitha",
    scientificName: "Feronia limonia",
    description:
      "Kapitha, also known as Wood Apple or Elephant Apple, is a deciduous tree native to the Indian subcontinent. It belongs to the family Rutaceae.",
    uses: "The fruit of Kapitha is used in Ayurvedic medicine for its digestive properties, treating diarrhea, dysentery, and promoting overall gastrointestinal health.",
    environment:
      "Kapitha trees are found in dry and rocky regions across India, often near villages and in cultivated orchards.",
    image:
      "https://www.jiomart.com/images/product/original/rvofkzpk3d/online-plant-bazar-brown-wood-apple-fruit-thai-variety-grafted-live-plant-product-images-orvofkzpk3d-p603983595-2-202308200013.jpg?im=Resize=(1000,1000)",
    type: "Tree",
    vernacularNames: {
      Hindi: "कपित्थ",
      English: "Wood Apple",
      Gujarati: "કાઠબેલ",
      Sanskrit: "कपित्थ",
    },
    wikipediaLink: "https://en.wikipedia.org/wiki/Feronia_limonia",
    sanskritPhrases: [
      "कृष्णांबु क्रियां क्रियाम् - भावप्रकाश",
      "कृष्णांबु क्रियां क्रियाम् - सुश्रुत",
      "कृष्णांबु क्रियां क्रियाम् - वाग्भट",
    ],
  },
  {
    id: 15,
    name: "Redwood",
    scientificName: "Sequoia sempervirens",
    description:
      "The Redwood is a large conifer tree known for its towering height. It is one of the tallest trees in the world and is native to the coastal regions of northern California.",
    uses: "Used for timber, paper production, and ornamental purposes.",
    environment:
      "Thrives in coastal climates with high humidity and well-drained soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Redwood_forest.jpg",
    type: "Tree",
  },
  {
    id: 16,
    name: "Baobab",
    scientificName: "Adansonia",
    description:
      "The Baobab tree is known for its distinctive appearance with a thick trunk and sparse branches. It is often called the 'Tree of Life' due to its ability to store large amounts of water.",
    uses: "Used for food, medicine, and as a source of water.",
    environment: "Grows in dry, arid regions of Africa and Madagascar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Baobab_2.jpg",
    type: "Tree",
  },
  {
    id: 17,
    name: "Oak Tree",
    scientificName: "Quercus",
    description:
      "The Oak tree is known for its strength and longevity. It has a broad canopy and produces acorns.",
    uses: "Timber for furniture and flooring, and acorns for wildlife food.",
    environment: "Thrives in temperate climates with well-drained soil.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Tree_oak.jpg",
    type: "Tree",
  },
  {
    id: 18,
    name: "Cherry Blossom",
    scientificName: "Prunus serrulata",
    description:
      "The Cherry Blossom tree is famous for its beautiful pink flowers. It is celebrated in many cultures for its beauty and short-lived blooms.",
    uses: "Ornamental purposes and cultural significance.",
    environment: "Prefers temperate climates with well-drained soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Cherry_blossoms_in_Washington_D.C..jpg",
    type: "Tree",
  },
  {
    id: 19,
    name: "Jacaranda",
    scientificName: "Jacaranda mimosifolia",
    description:
      "The Jacaranda tree is known for its stunning purple flowers that bloom in clusters.",
    uses: "Ornamental purposes and shade.",
    environment: "Grows well in tropical and subtropical climates.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Jacaranda_mimosifolia_%28flowering_tree%29.jpg",
    type: "Tree",
  },
  {
    id: 20,
    name: "Silver Maple",
    scientificName: "Acer saccharinum",
    description:
      "The Silver Maple is known for its fast growth and silvery underside of its leaves.",
    uses: "Shade tree and for ornamental purposes.",
    environment: "Thrives in temperate climates with moist soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Acer_saccharinum_%28Silver_Maple%29.jpg",
    type: "Tree",
  },
  {
    id: 21,
    name: "Pine Tree",
    scientificName: "Pinus",
    description:
      "Pine trees are coniferous trees known for their needle-like leaves and cones.",
    uses: "Timber, paper, and resin.",
    environment:
      "Grows in a variety of climates, including temperate and tropical.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Pinus_trees.jpg",
    type: "Tree",
  },
  {
    id: 22,
    name: "Cedar",
    scientificName: "Cedrus",
    description:
      "Cedars are evergreen coniferous trees known for their aromatic wood.",
    uses: "Timber for construction, furniture, and essential oils.",
    environment: "Prefers well-drained soil and full sun.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Cedrus_libani.jpg",
    type: "Tree",
  },
  {
    id: 23,
    name: "Ginkgo",
    scientificName: "Ginkgo biloba",
    description:
      "The Ginkgo tree is known for its fan-shaped leaves and is considered a living fossil.",
    uses: "Ornamental purposes and in traditional medicine.",
    environment: "Adaptable to various soil types and urban environments.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Ginkgo_biloba_%28leaf%29.jpg",
    type: "Tree",
  },
  {
    id: 24,
    name: "Magnolia",
    scientificName: "Magnolia",
    description: "Magnolia trees are known for their large, fragrant flowers.",
    uses: "Ornamental purposes and landscaping.",
    environment: "Thrives in temperate climates with well-drained soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Magnolia_blossom.jpg",
    type: "Tree",
  },
];

export default treeDetails;
