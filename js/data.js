/**
 * DATA TANAMAN - FLORAPEDIA
 * Tugas Akhir Mata Kuliah: Pemrograman Web 1
 * 
 * 100% TANPA DATABASE:
 * Seluruh data disimpan langsung dalam berkas lokal ini (Array of Objects).
 * Seluruh aset gambar tersimpan di folder lokal `med/`.
 */

const plantsData = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa Liebm.",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun",
    difficulty: "mudah",
    difficultyLabel: "Mudah (Pemula)",
    light: "sedang",
    lightLabel: "Cahaya Terang Tidak Langsung",
    waterInterval: 5,
    waterLabel: "1 - 2 Kali Seminggu",
    tagline: "Simbol Kemakmuran Tropis & Adaptasi",
    summary: "Berdaun lebar dengan belahan dan lubang alami (fenestrasi) yang sangat artistik serta mampu membersihkan polutan udara.",
    philosophy: "Lubang-lubang unik pada daun Monstera terbentuk secara evolusioner agar angin badai tropis dan tetesan air hujan dapat menembus ke bawah tanpa merusak daunnya, sekaligus memberi kesempatan cahaya bagi tunas di bawah naungannya. Filosofi ini mengajarkan bahwa kita harus mampu beradaptasi dengan terpaan badai hidup serta tetap memberi ruang bagi orang lain untuk bertumbuh bersama.",

    image: "med/monstera.jpg"
  },
  {
    id: "sansevieria",
    name: "Lidah Mertua (Sansevieria)",
    scientificName: "Sansevieria trifasciata / Dracaena trifasciata",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun",
    difficulty: "sangat-mudah",
    difficultyLabel: "Sangat Mudah",
    light: "semua",
    lightLabel: "Toleran Segala Cahaya",
    waterInterval: 12,
    waterLabel: "1 - 2 Minggu Sekali",
    tagline: "Simbol Keteguhan Hati & Pemurni Jiwa",
    summary: "Tanaman sukulen tegak yang sangat tangguh, mampu memproduksi oksigen di malam hari dan menyerap toksin formaldehida.",
    philosophy: "Bentuk daunnya yang tegak kaku menjulang melambangkan keteguhan prinsip hidup yang tidak mudah goyah oleh lingkungan sekitar. Kemampuannya bertahan di tempat minim air dan kemampuannya menyaring racun udara mengajarkan kita untuk selalu menjadi pribadi yang tangguh serta mampu menyaring pengaruh negatif dalam pergaulan.",

    image: "med/sansevieria.jpg"
  },
  {
    id: "lucky-bamboo",
    name: "Bambu Rejeki (Lucky Bamboo)",
    scientificName: "Dracaena sanderiana",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun & Air",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    light: "teduh",
    lightLabel: "Cahaya Teduh / Redup",
    waterInterval: 7,
    waterLabel: "Media Air: Ganti Tiap Minggu",
    tagline: "Simbol Kelenturan Jiwa & Keberuntungan",
    summary: "Tanaman air yang populer dengan batang beruas lentur, dipercaya membawa harmoni dan energi positif ke dalam ruangan.",
    philosophy: "Bambu memiliki sifat yang lentur; ia meliuk saat diterpa angin kencang namun tidak pernah patah, lalu kembali tegak ketika badai berlalu. Ini adalah lambang kerendahan hati, fleksibilitas dalam menghadapi dinamika hidup, serta integritas moral yang kukuh berakar pada kebajikan.",

    image: "med/lucky-bamboo.jpg"
  },
  {
    id: "melati-putih",
    name: "Melati Putih (Puspa Bangsa)",
    scientificName: "Jasminum sambac",
    category: "bunga",
    categoryLabel: "Tanaman Hias Bunga",
    difficulty: "menengah",
    difficultyLabel: "Menengah",
    light: "terik",
    lightLabel: "Matahari Terik Penuh",
    waterInterval: 2,
    waterLabel: "1 - 2 Hari Sekali",
    tagline: "Simbol Kesucian, Ketulusan & Keharuman Budi",
    summary: "Bunga nasional Indonesia berwarna putih bersih dengan wangi semerbak menenangkan yang mekar sepanjang tahun.",
    philosophy: "Bunga Melati berukuran mungil dan bersahaja, tidak mencolok dalam warna, namun wanginya semerbak menyentuh siapa saja yang berada di dekatnya. Filosofi Melati mengajarkan bahwa kemuliaan dan kebaikan budi manusia tidak ditentukan oleh kemewahan lahiriah, melainkan ketulusan kontribusi nyata bagi sesama.",

    image: "med/melati-putih.jpg"
  },
  {
    id: "anggrek-bulan",
    name: "Anggrek Bulan (Puspa Pesona)",
    scientificName: "Phalaenopsis amabilis",
    category: "bunga",
    categoryLabel: "Tanaman Hias Bunga",
    difficulty: "menengah",
    difficultyLabel: "Menengah",
    light: "sedang",
    lightLabel: "Teduh Terang Berventilasi",
    waterInterval: 4,
    waterLabel: "3 - 5 Hari Sekali",
    tagline: "Simbol Keanggunan, Kesabaran & Ketekunan",
    summary: "Salah satu bunga tercantik di Indonesia dengan kelopak lebar menyerupai kepakan sayap kupu-kupu yang tahan berbulan-bulan.",
    philosophy: "Anggrek Bulan membutuhkan waktu berbulan-bulan bahkan bertahun-tahun dalam proses pertumbuhan sebelum akhirnya memunculkan tangkai bunga. Namun saat mekar, pesonanya bertahan sangat lama. Ini mencerminkan bahwa karya besar dan kedewasaan sejati memerlukan kesabaran, proses yang tekun, dan tidak bisa diraih secara instan.",

    image: "med/anggrek-bulan.jpg"
  },
  {
    id: "jade-plant",
    name: "Jade Plant (Pohon Giok)",
    scientificName: "Crassula ovata",
    category: "sukulen",
    categoryLabel: "Tanaman Sukulen & Kaktus",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    light: "terik",
    lightLabel: "Cahaya Terang / Sinar Pagi",
    waterInterval: 10,
    waterLabel: "10 - 14 Hari Sekali",
    tagline: "Simbol Kemakmuran & Pertumbuhan Bertahap",
    summary: "Sukulen berdaun tebal berkilau menyerupai batu permata giok dengan batang kokoh layaknya pohon kerdil.",
    philosophy: "Daunnya yang bulat tebal melambangkan cadangan rezeki, kelimpahan, dan persahabatan yang abadi. Jade plant tumbuh perlahan namun kokoh mencengkeram tanah, mengajarkan pentingnya membangun fondasi hidup dan finansial yang stabil sedikit demi sedikit.",

    image: "med/jade-plant.jpg"
  },
  {
    id: "aloe-vera",
    name: "Lidah Buaya (Aloe Vera)",
    scientificName: "Aloe barbadensis miller",
    category: "herbal",
    categoryLabel: "Tanaman Herbal & Obat",
    difficulty: "sangat-mudah",
    difficultyLabel: "Sangat Mudah",
    light: "terik",
    lightLabel: "Matahari Terang Berlimpah",
    waterInterval: 9,
    waterLabel: "1 - 2 Minggu Sekali",
    tagline: "Simbol Kebaikan Hati & Penyembuhan Diri",
    summary: "Tanaman obat kaya khasiat dengan gel pendingin alami di dalam pelepahnya yang bermanfaat untuk luka, kulit, dan pencernaan.",
    philosophy: "Di luar tampak berduri tajam sebagai bentuk pertahanan diri, namun di dalamnya terkandung gel sejuk yang menyembuhkan luka dan memberikan nutrisi. Mengajarkan kita untuk memiliki ketegasan dalam melindungi martabat diri, namun tetap menyimpan hati yang lembut dan bermanfaat bagi orang lain.",

    image: "med/aloe-vera.jpg"
  },
  {
    id: "calathea",
    name: "Calathea (Tanaman Doa)",
    scientificName: "Calathea makoyana / Goeppertia",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun",
    difficulty: "menengah",
    difficultyLabel: "Menengah (Sensitif)",
    light: "teduh",
    lightLabel: "Teduh Terang Tanpa Silau",
    waterInterval: 3,
    waterLabel: "2 - 3 Hari Sekali",
    tagline: "Simbol Doa, Rasa Syukur & Kepekaan Rasa",
    summary: "Memiliki corak daun seperti lukisan merak. Daunnya bergerak mengatup ke atas pada malam hari layaknya tangan berdoa.",
    philosophy: "Gerakan daun Calathea yang membuka di pagi hari untuk menyambut anugerah cahaya dan mengatup rapi di malam hari dijuluki 'Prayer Plant'. Fenomena ini adalah pengingat spiritual tentang ritme kehidupan: bekerja keras dengan optimisme di siang hari, dan bersujud penuh rasa syukur di malam hari.",

    image: "med/calathea.jpg"
  },
  {
    id: "bonsai-beringin",
    name: "Bonsai Beringin (Ficus Bonsai)",
    scientificName: "Ficus microcarpa / retusa",
    category: "bonsai",
    categoryLabel: "Bonsai & Seni Tanaman",
    difficulty: "mahir",
    difficultyLabel: "Mahir (Butuh Ketelatenan)",
    light: "terik",
    lightLabel: "Sinar Matahari Pagi Langsung",
    waterInterval: 2,
    waterLabel: "1 - 2 Hari Sekali",
    tagline: "Simbol Pengendalian Diri & Harmoni Waktu",
    summary: "Karya seni botani hidup berupa pohon kerdil berakar gantung kokoh yang mencerminkan miniatur pohon purba nan megah.",
    philosophy: "Seni Bonsai berasal dari filosofi keselarasan antara manusia dan alam. Melalui pemangkasan kawat, pemotongan dahan yang tidak perlu, dan perawatan berkelanjutan, tercipta harmoni dalam keterbatasan ruang. Ini melambangkan seni pengendalian hawa nafsu dan pembentukan karakter mulia melalui disiplin diri yang konsisten.",

    image: "med/bonsai-beringin.jpg"
  },
  {
    id: "sirih-gading",
    name: "Sirih Gading (Golden Pothos)",
    scientificName: "Epipremnum aureum",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun",
    difficulty: "sangat-mudah",
    difficultyLabel: "Sangat Mudah",
    light: "semua",
    lightLabel: "Toleran Rendah - Terang",
    waterInterval: 6,
    waterLabel: "1 Kali Seminggu",
    tagline: "Simbol Daya Hidup & Pantang Menyerah",
    summary: "Tanaman rambat berdaun corak hijau keemasan yang sangat adaptif, dapat hidup di tanah maupun hanya di dalam botol air.",
    philosophy: "Sirih Gading dikenal sebagai tanaman yang hampir mustahil mati ('devil's ivy') karena daya juang hidupnya yang luar biasa. Di mana pun cabangnya jatuh atau dirambatkan, di situ akarnya segera tumbuh menjalar. Mengajarkan semangat optimisme bahwa di mana pun kita ditempatkan oleh keadaan, kita selalu bisa berkembang dan memberi manfaat.",

    image: "med/sirih-gading.jpg"
  },
  {
    id: "teratai",
    name: "Bunga Teratai (Water Lily)",
    scientificName: "Nymphaea",
    category: "bunga",
    categoryLabel: "Tanaman Hias Bunga & Air",
    difficulty: "menengah",
    difficultyLabel: "Menengah",
    light: "terik",
    lightLabel: "Matahari Terik Penuh (Full Sun)",
    waterInterval: 0,
    waterLabel: "Media Air Tergenang",
    tagline: "Simbol Kemurnian Jiwa di Tengah Lumpur Dunia",
    summary: "Tanaman air dengan daun mengapung bulat dan bunga megah yang membuka di pagi hari, menjadi lambang spiritualitas dunia.",
    philosophy: "Akar Teratai tertancap di lumpur kotor dasar kolam yang pekat, batangnya menembus air yang keruh, namun bunganya mekar di atas permukaan dengan kelopak putih bersih tanpa setitik pun lumpur yang menempel. Ini adalah metafora tertinggi integritas: tetap mempertahankan kesucian moral meski berada di lingkungan yang rusak.",

    image: "med/teratai.jpg"
  },
  {
    id: "lavender",
    name: "Lavender (Aromatik)",
    scientificName: "Lavandula angustifolia",
    category: "herbal",
    categoryLabel: "Tanaman Herbal & Aromatik",
    difficulty: "menengah",
    difficultyLabel: "Menengah",
    light: "terik",
    lightLabel: "Matahari Penuh & Terik",
    waterInterval: 7,
    waterLabel: "1 Kali Seminggu (Saat Kering)",
    tagline: "Simbol Kedamaian Jiwa & Ketenangan Batin",
    summary: "Bunga ungu semerbak asal Mediterania yang menghasilkan minyak atsiri penenang pikiran serta pengusir nyamuk alami.",
    philosophy: "Aroma Lavender telah digunakan ribuan tahun untuk meredakan gelisah, menyembuhkan insomnia, dan menenangkan jiwa yang kalut. Filosofinya mengingatkan kita tentang kekuatan kelemahlembutan: bahwa ketenangan batin jauh lebih berdaya meredam amarah dan konflik daripada teriakan yang keras.",

    image: "med/lavender.jpg"
  },
  {
    id: "aglaonema",
    name: "Aglaonema (Sri Rejeki)",
    scientificName: "Aglaonema commutatum",
    category: "daun",
    categoryLabel: "Tanaman Hias Daun",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    light: "sedang",
    lightLabel: "Teduh Terang / Semi Naungan",
    waterInterval: 4,
    waterLabel: "2 - 3 Kali Seminggu",
    tagline: "Simbol Keberuntungan & Pesona Bersahaja",
    summary: "Ratu tanaman daun dengan corak perpaduan hijau, merah muda, dan perak yang memikat serta mudah dirawat.",
    philosophy: "Dalam budaya Asia, tanaman ini dijuluki 'Sri Rejeki' yang melambangkan pembawa kemakmuran dan keharmonisan bagi penghuni rumah. Filosofinya mengajarkan kita untuk selalu menebarkan aura positif, menjaga tutur kata yang menyejukkan, dan memancarkan pesona dari dalam diri.",

    image: "med/aglaonema.jpg"
  },
  {
    id: "kaktus-centong",
    name: "Kaktus Centong (Opuntia)",
    scientificName: "Opuntia ficus-indica",
    category: "sukulen",
    categoryLabel: "Tanaman Sukulen & Kaktus",
    difficulty: "sangat-mudah",
    difficultyLabel: "Sangat Mudah",
    light: "terik",
    lightLabel: "Matahari Terik Sepanjang Hari",
    waterInterval: 14,
    waterLabel: "2 - 3 Minggu Sekali",
    tagline: "Simbol Ketabahan di Tengah Kegersangan",
    summary: "Kaktus dengan batang pipih menyerupai centong yang dilapisi duri halus pelindung, sangat tahan terhadap cuaca ekstrem.",
    philosophy: "Kaktus Centong mampu bertahan hidup dan menghasilkan buah manis di padang gurun yang paling gersang sekalipun. Filosofinya mengajarkan arti ketabahan sejati: bahwa masa-masa sulit (kegersangan hidup) bukanlah alasan untuk menyerah, melainkan kesempatan untuk mengoptimalkan potensi diri yang terdalam.",
    image: "med/kaktus-centong.jpg"
  },
  {
    id: "rosemary",
    name: "Rosemary (Herbal Mediterania)",
    scientificName: "Salvia rosmarinus",
    category: "herbal",
    categoryLabel: "Tanaman Herbal & Dapur",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    light: "terik",
    lightLabel: "Sinar Matahari Langsung",
    waterInterval: 5,
    waterLabel: "1 - 2 Kali Seminggu",
    tagline: "Simbol Kesetiaan & Daya Ingat Yang Kuat",
    summary: "Tanaman rempah berdaun jarum dengan wangi khas kayu pinus, populer dalam kuliner dunia serta meningkatkan fokus otak.",
    philosophy: "Sejak era Yunani kuno, ranting Rosemary disematkan pada hiasan kepala para pelajar untuk memperkuat ingatan dan dipakai saat ikrar pernikahan sebagai lambang kesetiaan. Filosofinya mengajak kita untuk tidak melupakan akar perjuangan dan memegang teguh komitmen janji yang telah diucapkan.",

    image: "med/rosemary.jpg"
  },
  {
    id: "mawar-merah",
    name: "Bunga Mawar (Pohon Mawar)",
    scientificName: "Rosa damascena / hybrida",
    category: "bunga",
    categoryLabel: "Tanaman Hias Bunga",
    difficulty: "menengah",
    difficultyLabel: "Menengah",
    light: "terik",
    lightLabel: "Matahari Penuh",
    waterInterval: 2,
    waterLabel: "1 - 2 Hari Sekali",
    tagline: "Simbol Cinta, Keberanian & Batasan Diri",
    summary: "Ratu bunga legendaris dengan kelopak bertumpuk indah beraroma manis yang dilindungi oleh duri tajam pada batangnya.",
    philosophy: "Mawar menampilkan keindahan mahkota bunga yang memikat sekaligus duri pelindung pada batangnya. Ini mengajarkan bahwa cinta dan kebaikan sejati harus disertai dengan harga diri dan batasan (boundaries) yang tegas, sehingga ketulusan kita tidak dieksploitasi oleh pihak yang tidak bertanggung jawab.",
    image: "med/mawar-merah.jpg"
  }
];

// Data Kutipan Filosofis Tanaman Harian (Quote of the Day)
const plantQuotes = [
  {
    quote: "Belajarlah dari tanaman: ia tumbuh dalam kesunyian, berakar dalam kerendahan hati, dan mekar untuk memberi keindahan bagi semesta.",
    author: "Filosofi Botani",
    plantRef: "Monstera & Anggrek"
  },
  {
    quote: "Pohon yang akarnya paling dalam mencengkeram bumi adalah pohon yang mampu bertahan dari tiupan badai paling kencang.",
    author: "Pepatah Kuno",
    plantRef: "Bonsai Beringin"
  },
  {
    quote: "Sebagaimana teratai yang mekar anggun di atas lumpur, jiwa yang murni tidak pernah terkotori oleh lingkungannya.",
    author: "Kearifan Timur",
    plantRef: "Bunga Teratai"
  },
  {
    quote: "Tanaman mengajarkan kita tentang waktu: tidak ada benih yang berkecambah kemarin lalu berbuah manis hari ini tanpa proses merawat.",
    author: "Kebijaksanaan Alam",
    plantRef: "Jade Plant & Sukulen"
  },
  {
    quote: "Bambu mengajarkan fleksibilitas: meliuklah saat badai menghadang, namun jangan pernah mencabut akar integritasmu.",
    author: "Filosofi Bambu",
    plantRef: "Bambu Rejeki"
  }
];

