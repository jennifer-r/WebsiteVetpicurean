const products = [
  {
    id: 1,
    title: "Chubby Gummy Basic",
    description: "Fungsi: 1. Memperkuat imun tubuh; 2. Menambah massa otot; 3. Membantu mengurangi lemak tubuh; 4. Membantu metabolisme. Hero ingredients: Spirulina, L-Arginine, Kuning Telur (Egg Yolk). Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 2 kali/hari; 2-5kg --> 2-3 Gummy 2 kali/hari; 5-10kg --> 3-4 Gummy 2 kali/hari; >10kg --> 5-6 Gummy 2 kali/hari.",
    alt: "Chubby Gummy Basic",
    src: "https://i.ibb.co.com/0Cq3gt1/BASIC.png"
  },
  {
    id: 2,
    title: "Chubby Gummy Collabery",
    description: "Fungsi: 1. Mengurangi rontok; 2. Memperkuat kulit dan bulu; 3. Baik untuk kesehatan sendi; 4. Mempercepat pertumbuhan bulu dan penyembuhan luka luar. Hero ingredients: Marine Collagen dan Goji Berry. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk support terapi penyakit kulit dan luka luar, serta baik untuk geriatric (anabul senior). Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 2 kali/hari; 2-5kg --> 2-3 Gummy 2 kali/hari; 5-10kg --> 3-4 Gummy 2 kali/hari; >10kg --> 5-6 Gummy 2 kali/hari.",
    alt: "Chubby Gummy Collabery",
    src: "https://i.ibb.co.com/3hQpWKm/Collaberry.png"
  },
  {
    id: 3,
    title: "Chubby Gummy Mom",
    description: "Fungsi: 1. Meningkatkan penyerapan nutrisi induk; 2. Memperbaiki kualitas sperma pada jantan; 3. Memperlancar ASI; 4. Meningkatkan imun. Hero ingredients: Spirulina dan Folic Acid. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk suplementasi sebelum anabul betina hamil, saat hamil, dan menyusui serta pejantan. Dapat digunakan bersamaan dengan obat dokter, pakan khusus, maupun susu anabul. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari.",
    alt: "Chubby Gummy Mom",
    src: "https://i.ibb.co.com/yYt26Y4/MOM.png"
  },
  {
    id: 4,
    title: "Chubby Gummy Essentials",
    description: "Fungsi: 1. Menambah nafsu makan; 2. Mengurangi stress; 3. Memperbaiki syaraf; 4. Menjaga kesehatan mata dan jantung; 5. Membantu penyembuhan flu. Hero ingredients: L-Lysine, Taurine, dan L-Tryptophan. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk suplementasi harian saat atau sehabis sakit dan support terapi Flu atau Urinary yang diakibatkan stess. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 2 kali/hari; 2-5kg --> 2-3 Gummy 2 kali/hari; 5-10kg --> 3-4 Gummy 2 kali/hari; >10kg --> 5-6 Gummy 2 kali/hari.",
    alt: "Chubby Gummy Essentials",
    src: "https://i.ibb.co.com/4jRQ680/ESSEN.png"
  },
  {
    id: 5,
    title: "Chubby Gummy Tummy",
    description: "Fungsi: 1. Membantu mengurangi gas; 2. Membantu meredakan permasalahan pencernaam (Diare, muntah, konstipasi); 3. Mengoptimalkan penyerapan makanan; 4. Memperbaiki struktur usus. Hero ingredients: Foeniculum vulgaris extract, Bee Pollen, Honey. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk anabul dengan radang usus, radang lambung, atau kembung. Berikan 30 menit sebelum makan. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 2 kali/hari; 2-5kg --> 2-3 Gummy 2 kali/hari; 5-10kg --> 3-4 Gummy 2 kali/hari; >10kg --> 5-6 Gummy 2 kali/hari.",
    alt: "Chubby Gummy Tummy",
    src: "https://i.ibb.co.com/7Gc0MbZ/TUMMY.png"
  },
  {
    id: 6,
    title: "Chubby Gummy Urigoel",
    description: "Fungsi: 1. Meningkatkan intensitas minum dan volume urin; 2. Membantu memecah kristal pada urin; 3. Anti-inflamasi dan tinggi Antioxidant; 4. Dapat digunakan untuk mencegah dan mengobati; 5. Menjaga kesehatan ginjal. Hero ingredients: Lingonberry Extract, Corn Silk Extract, Banana Tree Extract. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk anabul yang menderita FLUTD atau radang saluran kemih. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 3 kali/hari; 2-5kg --> 2-3 Gummy 3 kali/hari; 5-10kg --> 3-4 Gummy 3 kali/hari; >10kg --> 5-6 Gummy 3 kali/hari.",
    alt: "Chubby Gummy Urigoel",
    src: "https://i.ibb.co.com/YL6wV4q/Urigoel.png"
  },
  {
    id: 7,
    title: "FP Milk Cleanser 150ml",
    description: "Fungsi: 1. Membersihkan stain dan kotoran di area wajah dan mata; 2. Mengurangi kemerahan; 3. Membantu mengurangi stain (dengan pemakaian rutin). Hero ingredients: Centella asiatica Extract, Mugwort Extract, Rose Water, Witch Hazel. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk hasil terbaik gunakan 2 kali sehari. Cara pemakaian: 1. Kocok produk sebelum digunakan; 2. Aplikasikan produk pada kapas tipis; 3. Bersihkan kotoran dan area stain pada area mata, wajah, dan mulut",
    alt: "FP Milk Cleanser 150ml",
    src: "https://i.ibb.co.com/YhbDRZq/FP-MCR150.png"
  },
  {
    id: 8,
    title: "FP Milk Cleanser 60ml",
    description: "Fungsi: 1. Membersihkan stain dan kotoran di area wajah dan mata; 2. Mengurangi kemerahan; 3. Membantu mengurangi stain (dengan pemakaian rutin). Hero ingredients: Centella asiatica Extract, Mugwort Extract, Rose Water, Witch Hazel. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk hasil terbaik gunakan 2 kali sehari. Cara pemakaian: 1. Kocok produk sebelum digunakan; 2. Aplikasikan produk pada kapas tipis; 3. Bersihkan kotoran dan area stain pada area mata, wajah, dan mulut",
    alt: "FP Milk Cleanser 60ml",
    src: "https://i.ibb.co.com/hcVRmmh/FP-MCR-60.png"
  },
  {
    id: 9,
    title: "FP Stain Remover Powder 25g",
    description: "Fungsi: 1. Membersihkan stain dan kotoran di area wajah dan mata; 2. Mengurangi kemerahan; 3. Membantu mengurangi stain. Hero ingredients: Japanese Rice Powder dan Colloidal Oat Powder. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk digunakan setelah membersihkan area stain dengan Fluff + Pluff Face and Eye Milk Cleanser. Cara pemakaian: 1. Bersihkan area wajah dan mata dengan Fluff + Pluff Face and Eye Milk Cleanser; 2. Keringkan dengan tissue bersih; 3. Dengan kuas, aplikasikan produk di sekitar mata dan wajah berlawan arah dengan bulu",
    alt: "FP Stain Remover Powder 25g",
    src: "https://i.ibb.co.com/R9PL23r/FP-Pow.png"
  },
  {
    id: 10,
    title: "Chubby Balme Fungee",
    description: "Fungsi: 1. Membantu menyembuhkan jamur; 2. Membantu memperbaiki struktur kulit; 3. Mengurangi kemerahan pada kulit; 4. Membantu memperbaiki kulit kering dan pecah-pecah. Hero ingredients: Centella asiatica Extract, Calendula Extract, Acalypha Extract, Chamomile. Bisa untuk anjing, kucing, kelinci, dan mamalia kecil lainnya, jantan maupun betina. AMAN APABILA TERJILAT. Cara pemakaian: Oleskan pada area yang bermasalah tipis-tipis sehari 2 kali dan biarkan meresap",
    alt: "Chubby Balme Fungee",
    src: "https://i.ibb.co.com/r5KPGk3/Balme.png"
  },
  {
    id: 11,
    title: "Goat Up! 90g Jar",
    description: "Fungsi: 1. Pengganti susu untuk bayi kucing atau anjing; 2. Melengkapi nutrisi harian anabul; 3. Membantu memperkuat tulang dan gigi. Hero ingredients: Whey Powder, Pure Goat Milk, Goat's Colostrum. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk melengkapi nutrisi kitten atau puppies juga anabul dewasa. Bisa digunakan sebagai topping makanan. Cara pemakaian: Masukkan 1 sendok teh susu ke dalam 50ml air hangat, lalu campur dengan shaker (SHAKE!! NOT STIR)",
    alt: "Goat Up! 90 Jar",
    src: "https://i.ibb.co.com/ZTWsRm0/GU-90.png"
  },
  {
    id: 12,
    title: "Goat Up! 30g Pouch",
    description: "Fungsi: 1. Pengganti susu untuk bayi kucing atau anjing; 2. Melengkapi nutrisi harian anabul; 3. Membantu memperkuat tulang dan gigi. Hero ingredients: Whey Powder, Pure Goat Milk, Goat's Colostrum. Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk melengkapi nutrisi kitten atau puppies juga anabul dewasa. Bisa digunakan sebagai topping makanan. Cara pemakaian: Masukkan 1 sendok teh susu ke dalam 50ml air hangat, lalu campur dengan shaker (SHAKE!! NOT STIR)",
    alt: "Goat Up! 30g Pouch",
    src: "https://i.ibb.co.com/zQ3CtX8/GU-30.png"
  },
  {
    id: 13,
    title: "Booster Broth",
    description: "Fungsi: 1. Menambah nafsu makan dan minum anabul; 2. Menjaga kesehatan sistem pencernaan; 3. Baik untuk sendi. Hero ingredients: Beef Bone Extract dan Apple Cider Vinegar. Bisa untuk anjing dan kucing, jantan maupun betina. Direkomendasikan untuk menambah nafsu makan dan nafsu minum anabul anjing dan kucing. Bone broth tahan 2 minggu di kulkas, 2 bulan di freezer. Cara pemakaian: Cairkan Booster Broth dengan cara dibiarkan dalam suhu ruang atau dihangatkan, kemudian berikan langsung pada anabul atau sebagai topper pakan. Selalu bekukan kembali.",
    alt: "Booster Broth",
    src: "https://i.ibb.co.com/KXBCW5b/Booster-Broth.png"
  },
  {
    id: 14,
    title: "Chubby Gummy Basic Big Dog Edition",
    description: "Fungsi: 1. Memperkuat imun tubuh; 2. Menambah massa otot; 3. Membantu mengurangi lemak tubuh; 4. Membantu metabolisme. Hero ingredients: Spirulina, L-Arginine, Kuning Telur (Egg Yolk). Untuk anjing besar, jantan maupun betina. Direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Maintenance sehari-hari: 5-10kg --> 1/2 Gummy/hari; 10-15kg --> 1 Gummy/hari; -Ketika sedang sakit: 5-10kg --> 1/2 Gummy 2x sehari; 10-15kg --> 1 Gummy 2x sehari",
    alt: "Chubby Gummy Basic Big Dog Edition",
    src: "https://i.ibb.co.com/FKpdHkj/BASIC-DOG.png"
  },
  {
    id: 15,
    title: "Chubby Gummy Collaberry Big Dog Edition",
    description: "Fungsi: 1. Mengurangi rontok; 2. Memperkuat kulit dan bulu; 3. Membantu mengurangi lemak tubuh; 4. Mempercepat penyembuhan luka luar. Hero ingredients: Marine Collagen dan Goji Berry. Untuk anjing besar, jantan maupun betina. Direkomendasikan untuk support terapi penyakit kulit dan luka luar, serta baik untuk geriatric. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Maintenance sehari-hari: 5-10kg --> 1/2 Gummy/hari; 10-15kg --> 1 Gummy/hari; -Ketika sedang sakit: 5-10kg --> 1/2 Gummy 2x sehari; 10-15kg --> 1 Gummy 2x sehari",
    alt: "Chubby Gummy Collaberry Big Dog Edition",
    src: "https://i.ibb.co.com/4F6BX6V/Colla-Dog.png"
  },
  {
    id: 16,
    title: "Chubby Gummy Essentials Big Dog Edition",
    description: "Fungsi: 1. Menambah nafsu makan; 2. Mengurangi stress; 3. Memperbaiki syaraf; 4. Menjaga kesehatan mata dan jantung. Hero ingredients: L-Lysine, Taurine, L-Tryptophan. Untuk anjing besar, jantan maupun betina. Direkomendasikan untuk suplementasi harian saat atau sehabis sakit dan support terapi Urinary yang diakibatkan stress. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Maintenance sehari-hari: 5-10kg --> 1/2 Gummy/hari; 10-15kg --> 1 Gummy/hari; -Ketika sedang sakit: 5-10kg --> 1/2 Gummy 2x sehari; 10-15kg --> 1 Gummy 2x sehari",
    alt: "Chubby Gummy Essentials Big Dog Edition",
    src: "https://i.ibb.co.com/0CVrmTn/ESSEN-Dog.png"
  },
  {
    id: 17,
    title: "Chubby Gummy Tummy Big Dog Edition",
    description: "Fungsi: 1. Membantu mengurangi gas; 2. Membantu meredakan permasalahan pencernaan (Diare, muntah, konstipasi); 3. Meningkatkan daya cerna pakan; 4. Memperbaiki struktur pencernaan. Hero ingredients: Foeniculum vulgaris Extract, Bee Pollen, Honey. Untuk anjing besar, jantan maupun betina. Direkomendasikan untuk anabul dengan radang usus, radang lambung, atau kembung. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Maintenance sehari-hari: 5-10kg --> 1/2 Gummy/hari; 10-15kg --> 1 Gummy/hari; -Ketika sedang sakit: 5-10kg --> 1/2 Gummy 2x sehari; 10-15kg --> 1 Gummy 2x sehari",
    alt: "Chubby Gummy Tummy Big Dog Edition",
    src: "https://i.ibb.co.com/SmTntBZ/TUMMY-Dog.png"
  },
  {
    id: 18,
    title: "Chubby Gummy Dog Urigoel?",
    description: "hmm",
    alt: "Second",
    src: "https://i.ibb.co.com/c6Nc9m2/Uri-Dog.png"
  },
  {
    id: 19,
    title: "[BUNDLE] Double Basic",
    description: "2 Chubby Gummy Basic. Fungsi: 1. Memperkuat imun tubuh; 2. Menambah massa otot; 3. Membantu mengurangi lemak tubuh; 4. Membantu metabolisme. Hero ingredients: Spirulina, L-Arginine, Kuning Telur (Egg Yolk). Bisa untuk anjing, kucing, dan kelinci, jantan maupun betina. Direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Dapat digunakan bersamaan dengan obat dokter dan pakan khusus. Cara pemakaian: -Untuk maintenance sehari-hari: <1-2kg --> 1 Gummy/hari; 2-5kg --> 2 Gummy/hari; 5-10kg --> 3-4 Gummy/hari; >10kg --> 5-6 Gummy/hari. -Ketika sedang sakit: <1-2kg --> 1 Gummy 2 kali/hari; 2-5kg --> 2-3 Gummy 2 kali/hari; 5-10kg --> 3-4 Gummy 2 kali/hari; >10kg --> 5-6 Gummy 2 kali/hari.",
    alt: "[BUNDLE] Double Basic",
    src: "https://i.ibb.co.com/WzHW6dn/Bundle-Double-Basic.png"
  },
  {
    id: 20,
    title: "[BUNDLE] Chonky Gummy",
    description: "1 Chubby Gummy Basic & 1 Chubby Gummy Essentials. Chubby Gummy Basic memperkuat imun, menambah massa otot, membantu mengurangi lemak tubuh, dan membantu metabolisme, serta direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Chubby Gummy Essentials meningkatkan nafsu makan, mengurangi stress, memperbaiki syaraf, menjaga kesehatan mata dan jantung dan direkomendasikan untuk saat atau sehabis sakit dan support terapi Flu atau Urinary yang diakibatkan stress",
    alt: "[BUNDLE] Chonky Gummy",
    src: "https://i.ibb.co.com/MP0vvDJ/Bundle-Chongky.png"
  },
  {
    id: 21,
    title: "[BUNDLE] Glowing Gummy",
    description: "1 Chubby Gummy Basic & 1 Chubby Gummy Collaberry. Chubby Gummy Basic memperkuat imun, menambah massa otot, membantu mengurangi lemak tubuh, dan membantu metabolisme, serta direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Chubby Gummy Collaberry mengurangi rontok, memperkuat kulit dan bulu, baik untuk kesehatan sendi, serta mempercepat pertumbuhan bulu dan penyembuhan luka luar dan direkomendasikan untuk suport terapi penyakit kulit dan luka luar, serta baik untuk geriatric.",
    alt: "[BUNDLE] Glowing Gummy",
    src: "https://i.ibb.co.com/G71vZbb/Bundle-Glowing.png"
  },
  {
    id: 22,
    title: "[BUNDLE] Happy Tummy",
    description: "1 Chubby Gummy Basic & 1 Chubby Gummy Tummy. Chubby Gummy Basic memperkuat imun, menambah massa otot, membantu mengurangi lemak tubuh, dan membantu metabolisme, serta direkomendasikan untuk support terapi penyakit virus dan malnutrisi. Chubby Gummy Tummy membantu mengurangi gas, membantu meredakan permasalahan pencernaan (diare, muntah, konstipasi), mengoptimalkan penyerapan makanan, memperbaiki struktur usus, dan direkomendasikan untuk anabul dengan radang usus, radang lambung, atau kembung.",
    alt: "[BUNDLE] Happy Tummy",
    src: "https://i.ibb.co.com/HTSVpyx/Bundle-Happy-Tummy.png"
  },
  {
    id: 23,
    title: "[BUNDLE] Double Tummy",
    description: "2 Chubby Gummy Tummy. Membantu mengurangi gas, membantu meredakan permasalahan pencernaan (diare, muntah, konstipasi), mengoptimalkan penyerapan makanan, dan memperbaiki struktur usus, serta direkomendasikan untuk anabul dengan radang usus, radang lambung, atau kembung. Berikan 30 menit sebelum makan.",
    alt: "[BUNDLE] Double Tummy",
    src: "https://i.ibb.co.com/vm3b8wP/Bundle-Double-Tummy.png"
  },
  {
    id: 24,
    title: "[BUNDLE] Double Collaberry",
    description: "2 Chubby Gummy Collaberry. Mengurangi rontok, memperkuat kulit dan bulu, baik untuk kesehatan sendi, serta mempercepat pertumbuhan bulu dan penyembuhan luka luar dan direkomendasikan untuk suport terapi penyakit kulit dan luka luar, serta baik untuk geriatric.",
    alt: "[BUNDLE] Double Collaberry",
    src: "https://i.ibb.co.com/7RpG1Yb/Bundle-Glowing-2.png"
  },
  {
    id: 25,
    title: "[BUNDLE] Double Urigoel",
    description: "2 Chubby Gummy Urigoel. Meningkatkan intensitas minum dan volume urin, membantu memecah kristal pada urin, anti-inflamasi dan tinggi antioksidan, dapat digunakan untuk mencegah dan mengobati, dan menjaga kesehatan ginjal, serta direkomendasikan untuk anabul yang menderita FLUTD atau radang saluran kemih",
    alt: "[BUNDLE] Double Urigoel",
    src: "https://i.ibb.co.com/2jTwSsn/Bundle-URI.png"
  },
  {
    id: 26,
    title: "[BUNDLE] Urigoel - Essentials",
    description: "1 Chubby Gummy Urigoel & 1 Chubby Gummy Essentials. Chubby Gummy Urigoel meningkatkan kesehatan sistem kemih anabul dan direkomendasikan untuk anabul yang menderita FLUTD atau radang saluran kemih. Chubby Gummy Essentials meningkatkan nafsu makan, mengurangi stress, memperbaiki syaraf, menjaga kesehatan mata dan jantung dan direkomendasikan untuk saat atau sehabis sakit dan support terapi Flu atau Urinary yang diakibatkan stress.",
    alt: "[BUNDLE] Urigoel - Essentials",
    src: "https://i.ibb.co.com/h2sJy35/Bundle-UTI.png"
  },
  {
    id: 27,
    title: "[BUNDLE] Urigoel - Tummy",
    description: "1 Chubby Gummy Urigoel & 1 Chubby Gummy Tummy. Chubby Gummy Urigoel meningkatkan kesehatan sistem kemih anabul dan direkomendasikan untuk anabul yang menderita FLUTD atau radang saluran kemih. Chubby Gummy Tummy membantu meredakan masalah pencernaan dan memperbaiki struktur pencernaan anabul dan direkomendasikan untuk anabul dengan radang usus, radang lambung, atau kembung (berikan 30 menit sebelum makan).",
    alt: "[BUNDLE] Urigoel - Tummy",
    src: "https://i.ibb.co.com/CHDgPwR/Bundle-Vet-ed.png"
  },
  {
    id: 28,
    title: "[BUNDLE] Complete Basic",
    description: "1 Chubby Gummy Basic, 1 Chubby Gummy Collaberry, 1 Chubby Gummy Urigoel, 1 Chubby Gummy Tummy, 1 Chubby Gummy Essentials. Chubby Gummy Basic memperkuat imun, menambah massa otot, membantu mengurangi lemak tubuh, dan membantu metabolisme anabul. Chubby Gummy Collaberry membantu memelihara kesehatan kulit dan bulu anabul. Chubby Gummy Urigoel meningkatkan kesehatan sistem kemih anabul. Chubby Gummy Tummy membantu meredakan masalah pencernaan dan memperbaiki struktur pencernaan anabul. Chubby Gummy Essentials meningkatkan nafsu makan, mengurangi stress, memperbaiki syaraf, menjaga kesehatan mata dan jantung, serta membantu penyembuhan flu.",
    alt: "[BUNDLE] Complete Basic",
    src: "https://i.ibb.co.com/ph2jnpk/Bundle-Complete-Basic.png"
  },
  {
    id: 29,
    title: "[BUNDLE] Complete Mom",
    description: "1 Chubby Gummy Urigoel, 1 Chubby Gummy Collaberry, 1 Chubby Gummy Mom, 1 Chubby Gummy Tummy, 1 Chubby Gummy Essentials. Chubby Gummy Urigoel meningkatkan kesehatan sistem kemih anabul. Chubby Gummy Collaberry membantu memelihara kesehatan kulit dan bulu anabul. Chubby Gummy Mom membantu menyiapkan dan memelihara kesehatan kedua induk dari bibit unggul. Chubby Gummy Tummy membantu meredakan masalah pencernaan dan memperbaiki struktur pencernaan anabul. Chubby Gummy Essentials meningkatkan nafsu makan, mengurangi stress, memperbaiki syaraf, menjaga kesehatan mata dan jantung, serta membantu penyembuhan flu.",
    alt: "[BUNDLE] Complete Mom",
    src: "https://i.ibb.co.com/x1b0rq1/Bundle-Complete-Mom.png"
  },
  {
    id: 30,
    title: "[BUNDLE] FP Milk Cleanser + Stain Powder",
    description: "1 Fluff + Puff Face and Eye Milk Cleanser 150ml, 1 Fluff + Puff Face and Eye Milk Cleanser 60ml, 1 Stain Remover Powder 30g. Fluff + Puff Face and Eye Milk Cleanser dan Stain Powder berfungsi untuk membersihkan stain dan kotoran di area mata, wajah, dan mulut, mengurangi kemerahan, dan membantu mengurangi stain (dengan pemakaian rutin). Kocok Milk Cleanser sebelum digunakan, lalu aplikasikan produk pada kapas tipis, kemudian bersihkan kotoran dan area stain. Selanjutnya, keringkan area stain dengan tissue bersih, setelah itu aplikasikan Stain Powder dengan kuas ke area stain dengan arah berlawanan arah dari bulu.Untuk hasil terbaik gunakan Milk Cleanser 2 kali sehari.",
    alt: "[BUNDLE] FP Milk Cleanser + Stain Powder",
    src: "https://i.ibb.co.com/hXf6vvj/Bundle-FP-150.png"
  },
  {
    id: 31,
    title: "[BUNDLE] Milk Cleanser 150ml + Stain Powder 25g",
    description: "1 Fluff + Puff Face and Eye Milk Cleanser 150ml & 1 Stain Remover Powder 25g. Fluff + Puff Face and Eye Milk Cleanser dan Stain Powder berfungsi untuk membersihkan stain dan kotoran di area mata, wajah, dan mulut, mengurangi kemerahan, dan membantu mengurangi stain (dengan pemakaian rutin). Kocok Milk Cleanser sebelum digunakan, lalu aplikasikan produk pada kapas tipis, kemudian bersihkan kotoran dan area stain. Selanjutnya, keringkan area stain dengan tissue bersih, setelah itu aplikasikan Stain Powder dengan kuas ke area stain dengan arah berlawanan arah dari bulu.Untuk hasil terbaik gunakan Milk Cleanser 2 kali sehari.",
    alt: "[BUNDLE] Milk Cleanser 150ml + Stain Powder 25g",
    src: "https://i.ibb.co.com/nkpQ6Rm/Bundle-FP-150-2.png"
  },
  {
    id: 32,
    title: "[BUNDLE] Milk Cleanser 60ml + Stain Powder 25g",
    description: "1 Fluff + Puff Face and Eye Milk Cleanser 60ml & 1 Stain Remover Powder 25g. Fluff + Puff Face and Eye Milk Cleanser dan Stain Powder berfungsi untuk membersihkan stain dan kotoran di area mata, wajah, dan mulut, mengurangi kemerahan, dan membantu mengurangi stain (dengan pemakaian rutin). Kocok Milk Cleanser sebelum digunakan, lalu aplikasikan produk pada kapas tipis, kemudian bersihkan kotoran dan area stain. Selanjutnya, keringkan area stain dengan tissue bersih, setelah itu aplikasikan Stain Powder dengan kuas ke area stain dengan arah berlawanan arah dari bulu.Untuk hasil terbaik gunakan Milk Cleanser 2 kali sehari.",
    alt: "[BUNDLE] Milk Cleanser 60ml + Stain Powder 25g",
    src: "https://i.ibb.co.com/HhYpxxC/Bundle-FP-60.png"
  },
];

export default products;