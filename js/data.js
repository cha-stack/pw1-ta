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
    careGuide: {
      watering: "Siram secukupnya saat 3-5 cm lapisan atas media tanam mulai terasa kering saat disentuh. Jangan biarkan akar terendam air.",
      light: "Sangat menyukai tempat terang berdifusi (di dekat jendela). Hindari paparan matahari siang langsung agar daun tidak hangus.",
      humidity: "Menyukai kelembapan tinggi (60% - 80%). Bersihkan daun secara berkala dengan lap lembap untuk fotosintesis optimal.",
      soil: "Media tanam porous: campuran tanah humus, sekam bakar, cocopeat, dan perlit dengan drainase lancar.",
      troubleshooting: "Daun menguning menandakan kelebihan air (overwatering). Ujung daun kering kecokelatan mengindikasikan udara terlalu kering atau dehidrasi."
    },
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
    careGuide: {
      watering: "Siram hanya ketika tanah sudah benar-benar kering kerontang. Di musim hujan, cukup disiram 2-3 minggu sekali.",
      light: "Bisa hidup di sudut ruangan minim cahaya maupun di bawah sinar matahari langsung.",
      humidity: "Toleran terhadap udara kering dalam ruangan ber-AC.",
      soil: "Gunakan media tanam kaktus/sukulen (pasir malang, sekam bakar) yang sangat cepat mengalirkan air.",
      troubleshooting: "Pangkal daun lembek dan busuk adalah tanda pasti kelebihan air. Segera hentikan penyiraman dan ganti media kering."
    },
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
    careGuide: {
      watering: "Bisa ditanam di vas kaca berisi air bersih. Ganti air setiap 7-10 hari sekali dan gunakan air bebas klorin (air endapan/filtrasi).",
      light: "Letakkan di tempat teduh dengan cahaya tidak langsung. Cahaya matahari terik akan membuat daunnya menguning seketika.",
      humidity: "Kelembapan ruangan biasa. Cocok diletakkan di atas meja kerja atau rak belajar.",
      soil: "Dapat menggunakan air murni berkerikil hias atau media tanah gembur bernutrisi seimbang.",
      troubleshooting: "Jika batang mulai menguning dari bawah, biasanya disebabkan oleh air yang mengandung kaporit tinggi atau pemberian pupuk berlebih."
    },
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
    careGuide: {
      watering: "Siram setiap pagi atau sore hari, terutama saat cuaca panas. Pastikan tanah tetap lembap namun tidak becek menggenang.",
      light: "Wajib mendapatkan sinar matahari langsung minimal 4-6 jam per hari agar rajin menghasilkan kuncup bunga.",
      humidity: "Suhu hangat tropis (24°C - 32°C) dengan sirkulasi udara luar yang sehat.",
      soil: "Tanah kebun gembur yang dicampur pupuk kandang matang dan sedikit pasir.",
      troubleshooting: "Jika tanaman subur daun tetapi tidak berbunga, pangkas ujung ranting (pruning) dan berikan pupuk dengan kadar Fosfor (P) tinggi."
    },
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
    careGuide: {
      watering: "Siram media pakis/arang saat mulai mengering. Jangan menyiram langsung ke tengah mahkota daun agar tidak membusuk.",
      light: "Memerlukan cahaya terang tersaring (paranet 50-60%). Jangan terkena sinar matahari siang langsung.",
      humidity: "Sirkulasi angin yang sepoi-sepoi sangat krusial untuk mencegah jamur pada akar epifitnya.",
      soil: "Media porous non-tanah: arang kayu, serabut kelapa terproses, atau pakis lempeng.",
      troubleshooting: "Akar berwarna abu-abu/keperakan menandakan tanaman haus. Akar berwarna hijau segar menandakan kadar air cukup."
    },
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
    careGuide: {
      watering: "Terapkan prinsip 'soak and dry': siram sampai air keluar dari dasar pot, lalu tunggu tanah kering total sebelum menyiram lagi.",
      light: "Letakkan di tempat yang mendapatkan cahaya matahari minimal 4 jam sehari agar warna daun tetap hijau segar berkilau.",
      humidity: "Menyukai lingkungan kering dan sejuk, hindari ruangan yang terlalu lembap tanpa ventilasi.",
      soil: "Media tanam khusus sukulen berpasir dengan rasio 70% bahan anorganik (pumice, perlit, pasir malang).",
      troubleshooting: "Daun yang mengerut menandakan tanaman kekurangan air. Daun rontok dan menguning menandakan kelebihan air."
    },
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
    careGuide: {
      watering: "Siram secukupnya saat media tanam benar-benar kering. Terlalu sering menyiram akan membuat pangkal pelepah busuk.",
      light: "Menyukai sinar matahari pagi yang cukup. Jika di dalam ruangan, jemur di luar seminggu sekali.",
      humidity: "Sangat toleran cuaca panas dan udara kering.",
      soil: "Campuran pasir malang, sekam bakar, dan sedikit tanah kompos dengan pot berlubang bawah luas.",
      troubleshooting: "Pelepah menipis dan melengkung menandakan tanaman kekurangan air dan cahaya. Warna daun kecokelatan menandakan stres akibat sengatan matahari mendadak."
    },
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
    careGuide: {
      watering: "Jaga kelembapan media tanam agar selalu sedikit lembap (tidak kering dan tidak tergenang). Gunakan air murni/endapan.",
      light: "Letakkan di tempat teduh dengan cahaya pantulan. Sinar matahari langsung akan membakar pigmen daunnya yang elok.",
      humidity: "Sangat membutuhkan kelembapan tinggi (70%+). Semprot udara sekitarnya atau letakkan di dekat humidifier.",
      soil: "Tanah gembur kaya humus dengan campuran perlit dan cocopeat yang menyimpan kelembapan alami.",
      troubleshooting: "Ujung daun kering menggulung disebabkan oleh klorin pada air keran atau kelembapan udara yang terlalu rendah."
    },
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
    careGuide: {
      watering: "Siram secara teliti ketika permukaan tanah atas mulai agak mengering. Pastikan air mengalir keluar dari lubang dasar pot bonsai.",
      light: "Memerlukan sinar matahari langsung minimal 4-5 jam sehari agar daun tetap kecil dan ruas cabang rapat.",
      humidity: "Tahan berbagai kondisi iklim tropis, namun menyukai sirkulasi angin segar luar ruangan.",
      soil: "Substrat butiran khusus bonsai (akadama, pumice, pasir malang halus) tanpa tanah lempung padat.",
      troubleshooting: "Daun rontok mendadak biasanya reaksi stres pemindahan lokasi atau kekurangan sinar matahari yang drastis."
    },
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
    careGuide: {
      watering: "Siram saat tanah bagian atas kering. Jika ditanam di vas air, cukup ganti air tiap minggu dan cuci batangnya.",
      light: "Sangat fleksibel; tumbuh baik di dalam kamar dengan lampu neon hingga ruangan berjendela terang.",
      humidity: "Sangat toleran dan tidak rewel terhadap kelembapan.",
      soil: "Bisa hidup di berbagai jenis tanah gembur atau media air murni tanpa tanah.",
      troubleshooting: "Warna corak emas memudar menjadi hijau polos menandakan tanaman berada di tempat yang terlalu gelap."
    },
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
    careGuide: {
      watering: "Hidup di wadah kolam air tenang. Jaga agar ketinggian air di atas umbi sekitar 20-40 cm.",
      light: "Wajib terpapar sinar matahari penuh minimal 6 jam sehari agar mau mekar dan tidak mengalami pembusukan daun.",
      humidity: "Lingkungan air terbuka.",
      soil: "Lumpur sawah atau tanah liat berat yang diberi pupuk slow-release khusus tanaman air di dasar pot.",
      troubleshooting: "Daun banyak yang menguning biasanya akibat kolam tertutup lumut berlebihan atau kurang sinar matahari."
    },
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
    careGuide: {
      watering: "Hanya siram ketika tanah kering kerontang. Lavender sangat benci kondisi tanah lembap berair.",
      light: "Membutuhkan sinar matahari penuh minimal 6-8 jam per hari dan sirkulasi angin yang berhembus bebas.",
      humidity: "Sangat menyukai udara kering berangin, tidak cocok di ruangan lembap atau dingin tertutup.",
      soil: "Tanah berpasir atau berkerikil dengan drainase sangat cepat dan pH sedikit basa (alkali).",
      troubleshooting: "Batang layu dan menghitam adalah indikasi busuk akar akibat genangan air atau drainase pot tersumbat."
    },
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
    careGuide: {
      watering: "Siram saat media tanam atas mulai kering. Jaga agar media tetap gembur dan tidak becek berlebihan.",
      light: "Cahaya teduh berlimpah di teras rumah. Jangan letakkan di bawah terik matahari siang langsung karena daunnya akan terbakar.",
      humidity: "Suhu hangat khas nusantara (22°C - 30°C).",
      soil: "Kombinasi sekam mentah fermentasi, sekam bakar, dan cocopeat.",
      troubleshooting: "Daun bawah yang mengering secara alami adalah proses peremajaan, cukup gunting dengan pisau steril."
    },
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
    careGuide: {
      watering: "Siram secukupnya hanya ketika seluruh media tanam sudah kering mengering (sekitar 2-3 minggu sekali).",
      light: "Wajib diletakkan di tempat dengan sinar matahari langsung penuh.",
      humidity: "Udara kering dan panas. Hindari kelembapan tinggi.",
      soil: "Media pasir malang kasar, perlit, dan sedikit kompos kering dengan lubang drainase pot banyak.",
      troubleshooting: "Jika batang melengkung lembek dan berair, itu tanda infeksi jamur akibat kelebihan air."
    },
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
    careGuide: {
      watering: "Siram saat permukaan tanah kering. Jangan biarkan tanah becek karena akarnya sensitif terhadap kelembapan berlebih.",
      light: "Letakkan di tempat terbuka yang terpapar matahari minimal 6 jam sehari.",
      humidity: "Menyukai sirkulasi udara bebas dan tidak menyukai ruangan tertutup pengap.",
      soil: "Tanah berpasir ringan dengan drainase sangat cepat.",
      troubleshooting: "Daun yang menghitam dan rontok menandakan sirkulasi udara kurang atau akar busuk akibat overwatering."
    },
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
    careGuide: {
      watering: "Siram pada pagi hari di area perakaran tanah. Hindari membasahi kelopak dan daun untuk mencegah infeksi jamur daun hitam.",
      light: "Memerlukan sinar matahari langsung minimal 5-6 jam per hari.",
      humidity: "Sirkulasi udara terbuka yang baik sangat penting.",
      soil: "Tanah lempung berpasir subur kaya bahan organik dengan drainase lancar.",
      troubleshooting: "Munculnya bintik hitam pada daun (black spot) diatasi dengan membuang daun sakit dan memperbaiki sirkulasi udara."
    },
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

// Pertanyaan Kuis Karakter & Rekomendasi Tanaman
const quizQuestions = [
  {
    question: "Bagaimana pola rutinitas kesibukan harianmu?",
    options: [
      { text: "Sangat sibuk, sering bepergian, butuh yang mandiri tanpa repot.", trait: "sangat-mudah" },
      { text: "Punya rutinitas teratur di akhir pekan untuk berkebun santai.", trait: "mudah" },
      { text: "Suka meluangkan waktu merawat detail kecil setiap beberapa hari.", trait: "menengah" },
      { text: "Menikmati seni ketelitian tinggi, pemangkasan, dan perawatan harian.", trait: "mahir" }
    ]
  },
  {
    question: "Di mana rencana kamu akan meletakkan tanaman ini?",
    options: [
      { text: "Di atas meja kerja / sudut kamar dengan cahaya lampu biasa.", trait: "teduh" },
      { text: "Di dekat jendela kamar atau ruang tamu yang terang benderang.", trait: "sedang" },
      { text: "Di balkon, teras terbuka, atau halaman yang kena sinar matahari terik.", trait: "terik" },
      { text: "Fleksibel di berbagai sudut rumah atau di dalam vas air.", trait: "semua" }
    ]
  },
  {
    question: "Nilai filosofi hidup apa yang paling menyentuh hatimu saat ini?",
    options: [
      { text: "Ketahanan mental, ketangguhan diri menyaring hal negatif.", trait: "sansevieria" },
      { text: "Fleksibilitas dan kemampuan beradaptasi di tengah badai.", trait: "monstera" },
      { text: "Ketenangan jiwa, keheningan batin, dan kebaikan tanpa pamrih.", trait: "melati-putih" },
      { text: "Disiplin diri, kesabaran dalam proses bertumbuh perlahan.", trait: "bonsai-beringin" }
    ]
  },
  {
    question: "Apa tujuan utama kamu merawat tanaman di rumah?",
    options: [
      { text: "Menyaring udara kotor & estetika modern minimalis.", trait: "daun" },
      { text: "Menikmati keindahan warna, bentuk kelopak, dan keharuman.", trait: "bunga" },
      { text: "Khasiat kesehatan, obat alami herbal, atau bumbu dapur.", trait: "herbal" },
      { text: "Koleksi estetika meja kerja imut yang hemat air.", trait: "sukulen" }
    ]
  }
];
