/**
 * FLORAPEDIA - LOGIKA INTERAKTIF UTAMA (APP.JS)
 * Tugas Akhir Mata Kuliah: Pemrograman Web 1
 * 
 * Fitur:
 * 1. Rendering Dinamis Katalog Tanaman dari data.js
 * 2. Pencarian Real-Time & Multi-Filter Kategori, Cahaya, Kesulitan
 * 3. Modal Dialog Interaktif & Tab Navigasi Perawatan
 * 4. Sistem Favorit Persisten dengan Web Storage (localStorage)
 * 5. Kuis Rekomendasi Tanaman Karaktermu
 * 6. Kalkulator Jadwal Penyiraman Cerdas
 * 7. Dark/Light Theme Switcher dengan Penyimpanan Preferensi
 * 8. Validasi Formulir Konsultasi & Toast Notification
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- INISIALISASI VARIABEL GLOBAL & STATE ---
  let currentCategory = "semua";
  let currentDifficulty = "semua";
  let currentLight = "semua";
  let searchQuery = "";
  let sortOrder = "default";

  // Ambil data favorit dari localStorage (jika ada)
  let favoriteIds = JSON.parse(localStorage.getItem("florapedia_favs") || "[]");

  // DOM Elements - Katalog
  const plantsGrid = document.getElementById("plants-grid");
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const categoryPills = document.querySelectorAll(".category-pill");
  const filterDifficulty = document.getElementById("filter-difficulty");
  const filterLight = document.getElementById("filter-light");
  const sortSelect = document.getElementById("sort-select");

  // DOM Elements - Modal
  const modalOverlay = document.getElementById("plant-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalScientific = document.getElementById("modal-scientific");
  const modalTagline = document.getElementById("modal-tagline");
  const modalPhilosophy = document.getElementById("modal-philosophy");
  const modalWatering = document.getElementById("modal-watering");
  const modalLight = document.getElementById("modal-light");
  const modalSoil = document.getElementById("modal-soil");
  const modalHumidity = document.getElementById("modal-humidity");
  const modalTroubleshoot = document.getElementById("modal-troubleshoot");
  const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
  const modalTabPanes = document.querySelectorAll(".modal-tab-pane");

  // DOM Elements - Favorit Section
  const favGrid = document.getElementById("favorites-grid");
  const favEmpty = document.getElementById("favorites-empty");
  const favCounterNav = document.getElementById("fav-counter-badge");
  const clearFavsBtn = document.getElementById("clear-favs-btn");

  // DOM Elements - Tema Dark/Light
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");

  // DOM Elements - Navigasi Mobile
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  // DOM Elements - Toast & Back to Top
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  const backToTopBtn = document.getElementById("back-to-top");

  // DOM Elements - Quote of the Day
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteShuffleBtn = document.getElementById("quote-shuffle-btn");

  /* ==========================================================================
     1. SISTEM TEMA GELAP / TERANG (DARK MODE)
     ========================================================================== */
  const savedTheme = localStorage.getItem("florapedia_theme") || "light";
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(activeTheme);
      localStorage.setItem("florapedia_theme", activeTheme);
      showToast(`Beralih ke mode ${activeTheme === "dark" ? "malam tropis" : "siang cerah"}`);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☀️";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "🌙";
    }
  }

  /* ==========================================================================
     2. RENDERING KATALOG TANAMAN & PENYARINGAN (FILTER & SEARCH)
     ========================================================================== */
  function filterAndRenderPlants() {
    let filtered = plantsData.filter((plant) => {
      // Filter Kategori
      const matchesCategory = currentCategory === "semua" || plant.category === currentCategory;
      // Filter Tingkat Kesulitan
      const matchesDifficulty = currentDifficulty === "semua" || plant.difficulty === currentDifficulty;
      // Filter Kebutuhan Cahaya
      const matchesLight = currentLight === "semua" || plant.light === currentLight || plant.light === "semua";
      // Filter Pencarian Teks
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        plant.name.toLowerCase().includes(q) ||
        plant.scientificName.toLowerCase().includes(q) ||
        plant.summary.toLowerCase().includes(q) ||
        plant.philosophy.toLowerCase().includes(q);

      return matchesCategory && matchesDifficulty && matchesLight && matchesSearch;
    });

    // Pengurutan (Sorting)
    if (sortOrder === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "difficulty") {
      const order = { "sangat-mudah": 1, mudah: 2, menengah: 3, mahir: 4 };
      filtered.sort((a, b) => (order[a.difficulty] || 99) - (order[b.difficulty] || 99));
    }

    renderPlantsList(filtered, plantsGrid);

    // Update Counter Jumlah Hasil
    if (resultsCount) {
      resultsCount.textContent = `Menampilkan ${filtered.length} dari ${plantsData.length} tanaman`;
    }
  }

  function renderPlantsList(plantsArray, targetContainer) {
    if (!targetContainer) return;

    if (plantsArray.length === 0) {
      targetContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🌱</div>
          <h3>Tidak Ada Tanaman yang Cocok</h3>
          <p>Coba gunakan kata kunci lain atau ubah filter kategori pencarian Anda.</p>
          <button class="btn btn-primary" id="btn-reset-filter">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById("btn-reset-filter");
      if (resetBtn) {
        resetBtn.addEventListener("click", resetAllFilters);
      }
      return;
    }

    targetContainer.innerHTML = plantsArray
      .map((plant) => {
        const isFav = favoriteIds.includes(plant.id);
        const difficultyClass = `badge-diff-${plant.difficulty}`;

        return `
          <article class="plant-card" data-id="${plant.id}">
            <div class="plant-card-media">
              <img 
                src="${plant.image}" 
                alt="${plant.name}" 
                loading="lazy"
                onerror="this.onerror=null; this.src='med/plant-fallback.svg';"
              />
              <div class="plant-card-badges">
                <span class="badge-tag badge-category">${plant.categoryLabel}</span>
                <span class="badge-tag ${difficultyClass}">${plant.difficultyLabel}</span>
              </div>
              <button 
                class="btn-bookmark ${isFav ? "bookmarked" : ""}" 
                data-fav-id="${plant.id}" 
                title="${isFav ? "Hapus dari Favorit" : "Simpan ke Favorit"}"
                aria-label="Simpan ke favorit"
              >
                ${isFav ? "❤️" : "🤍"}
              </button>
            </div>
            
            <div class="plant-card-body">
              <h3 class="plant-card-name">${plant.name}</h3>
              <p class="plant-card-scientific">${plant.scientificName}</p>
              
              <div class="plant-philosophy-preview">
                <p><strong>Filosofi:</strong> ${plant.philosophy}</p>
              </div>

              <div class="plant-specs-row">
                <div class="spec-chip">
                  <span>☀️</span>
                  <span>${plant.lightLabel}</span>
                </div>
                <div class="spec-chip">
                  <span>💧</span>
                  <span>${plant.waterLabel}</span>
                </div>
              </div>

              <div class="plant-card-footer">
                <button class="btn-detail" data-detail-id="${plant.id}">
                  <span>Pelajari Filosofi & Rawat</span> ➔
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Pasang Event Listener ke Tombol di setiap Card
    attachCardListeners(targetContainer);
  }

  function attachCardListeners(container) {
    // Tombol Detail Modal
    const detailBtns = container.querySelectorAll("[data-detail-id]");
    detailBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-detail-id");
        openPlantModal(id);
      });
    });

    // Tombol Bookmark / Favorit
    const bookmarkBtns = container.querySelectorAll("[data-fav-id]");
    bookmarkBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-fav-id");
        toggleFavorite(id);
      });
    });
  }

  function resetAllFilters() {
    currentCategory = "semua";
    currentDifficulty = "semua";
    currentLight = "semua";
    searchQuery = "";
    sortOrder = "default";

    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.style.display = "none";
    if (filterDifficulty) filterDifficulty.value = "semua";
    if (filterLight) filterLight.value = "semua";
    if (sortSelect) sortSelect.value = "default";

    categoryPills.forEach((pill) => {
      pill.classList.toggle("active", pill.getAttribute("data-category") === "semua");
    });

    filterAndRenderPlants();
    showToast("Filter berhasil di-reset");
  }

  // Event Listeners Input Pencarian
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery.length > 0 ? "block" : "none";
      }
      filterAndRenderPlants();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      searchClearBtn.style.display = "none";
      filterAndRenderPlants();
      searchInput.focus();
    });
  }

  // Event Listener Tombol Kategori
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      categoryPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category");
      filterAndRenderPlants();
    });
  });

  // Dropdown Filter Tambahan
  if (filterDifficulty) {
    filterDifficulty.addEventListener("change", (e) => {
      currentDifficulty = e.target.value;
      filterAndRenderPlants();
    });
  }

  if (filterLight) {
    filterLight.addEventListener("change", (e) => {
      currentLight = e.target.value;
      filterAndRenderPlants();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortOrder = e.target.value;
      filterAndRenderPlants();
    });
  }

  /* ==========================================================================
     3. SISTEM MODAL POPUP DETAIL TANAMAN
     ========================================================================== */
  function openPlantModal(plantId) {
    const plant = plantsData.find((p) => p.id === plantId);
    if (!plant || !modalOverlay) return;

    modalImg.src = plant.image;
    modalImg.alt = plant.name;
    modalTitle.textContent = plant.name;
    modalScientific.textContent = plant.scientificName;
    modalTagline.textContent = plant.tagline;

    modalPhilosophy.textContent = plant.philosophy;
    modalWatering.textContent = plant.careGuide.watering;
    modalLight.textContent = plant.careGuide.light;
    modalSoil.textContent = plant.careGuide.soil;
    modalHumidity.textContent = plant.careGuide.humidity;
    modalTroubleshoot.textContent = plant.careGuide.troubleshooting;

    // Reset tab ke tab pertama (Filosofi)
    modalTabBtns.forEach((btn, idx) => btn.classList.toggle("active", idx === 0));
    modalTabPanes.forEach((pane, idx) => pane.classList.toggle("active", idx === 0));

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Cegah scroll saat modal terbuka
  }

  function closePlantModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closePlantModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closePlantModal();
      }
    });
  }

  // Keyboard Escape untuk menutup modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closePlantModal();
    }
  });

  // Tab Switching di dalam Modal
  modalTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      modalTabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      modalTabPanes.forEach((pane) => {
        pane.classList.toggle("active", pane.id === `tab-${targetTab}`);
      });
    });
  });

  /* ==========================================================================
     4. SISTEM KOLEKSI FAVORIT (BOOKMARK & LOCAL STORAGE)
     ========================================================================== */
  function toggleFavorite(plantId) {
    const index = favoriteIds.indexOf(plantId);
    const plant = plantsData.find((p) => p.id === plantId);
    const plantName = plant ? plant.name : "Tanaman";

    if (index > -1) {
      favoriteIds.splice(index, 1);
      showToast(`${plantName} dihapus dari koleksi favorit`);
    } else {
      favoriteIds.push(plantId);
      showToast(`❤️ ${plantName} ditambahkan ke koleksi favorit!`);
    }

    localStorage.setItem("florapedia_favs", JSON.stringify(favoriteIds));
    updateFavoriteUI();
    filterAndRenderPlants(); // Perbarui ikon di kartu katalog
  }

  function updateFavoriteUI() {
    // Update Badge Angka di Navigasi
    if (favCounterNav) {
      favCounterNav.textContent = favoriteIds.length;
      favCounterNav.style.display = favoriteIds.length > 0 ? "inline-block" : "none";
    }

    // Render di Section Koleksi Favorit
    if (!favGrid || !favEmpty) return;

    const favoritePlants = plantsData.filter((p) => favoriteIds.includes(p.id));

    if (favoritePlants.length === 0) {
      favGrid.style.display = "none";
      favEmpty.style.display = "block";
    } else {
      favGrid.style.display = "grid";
      favEmpty.style.display = "none";
      renderPlantsList(favoritePlants, favGrid);
    }
  }

  if (clearFavsBtn) {
    clearFavsBtn.addEventListener("click", () => {
      if (favoriteIds.length === 0) return;
      if (confirm("Apakah Anda yakin ingin mengosongkan semua daftar tanaman favorit?")) {
        favoriteIds = [];
        localStorage.setItem("florapedia_favs", JSON.stringify(favoriteIds));
        updateFavoriteUI();
        filterAndRenderPlants();
        showToast("Semua koleksi favorit telah dibersihkan");
      }
    });
  }

  /* ==========================================================================
     5. KUTIPAN FILOSOFI HARIAN (QUOTE SHUFFLE)
     ========================================================================== */
  let currentQuoteIndex = 0;
  function showQuote(index) {
    if (!quoteText || !quoteAuthor || plantQuotes.length === 0) return;
    const q = plantQuotes[index];
    quoteText.textContent = `“${q.quote}”`;
    quoteAuthor.textContent = `— ${q.author} (${q.plantRef})`;
  }

  if (quoteShuffleBtn) {
    quoteShuffleBtn.addEventListener("click", () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % plantQuotes.length;
      showQuote(currentQuoteIndex);
    });
  }
  showQuote(currentQuoteIndex);

  /* ==========================================================================
     6. FITUR INTERAKTIF: KUIS TANAMAN KARAKTERMU
     ========================================================================== */
  let quizCurrentIndex = 0;
  const userAnswers = [];

  const quizCardQuestion = document.getElementById("quiz-card-question");
  const quizResultView = document.getElementById("quiz-result-view");
  const quizStepNumber = document.getElementById("quiz-step-number");
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const quizQuestionText = document.getElementById("quiz-question-text");
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const quizNextBtn = document.getElementById("quiz-next-btn");
  const quizPrevBtn = document.getElementById("quiz-prev-btn");
  const quizRestartBtn = document.getElementById("quiz-restart-btn");

  // Hasil Kuis DOM
  const quizResultPlantName = document.getElementById("quiz-result-plant-name");
  const quizResultPlantScientific = document.getElementById("quiz-result-plant-scientific");
  const quizResultPhilosophy = document.getElementById("quiz-result-philosophy");
  const quizResultCare = document.getElementById("quiz-result-care");
  const quizResultDetailBtn = document.getElementById("quiz-result-detail-btn");

  function renderQuizQuestion() {
    if (!quizQuestionText || !quizOptionsContainer) return;

    const q = quizQuestions[quizCurrentIndex];
    if (quizStepNumber) quizStepNumber.textContent = `Pertanyaan ${quizCurrentIndex + 1} dari ${quizQuestions.length}`;
    if (quizProgressFill) {
      quizProgressFill.style.width = `${((quizCurrentIndex + 1) / quizQuestions.length) * 100}%`;
    }
    quizQuestionText.textContent = q.question;

    quizOptionsContainer.innerHTML = q.options
      .map((opt, idx) => {
        const isSelected = userAnswers[quizCurrentIndex] === idx;
        return `
          <button class="quiz-option-btn ${isSelected ? "selected" : ""}" data-option-index="${idx}">
            <span class="quiz-option-radio"></span>
            <span>${opt.text}</span>
          </button>
        `;
      })
      .join("");

    const optionBtns = quizOptionsContainer.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-option-index"), 10);
        userAnswers[quizCurrentIndex] = idx;
        optionBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        if (quizNextBtn) quizNextBtn.disabled = false;
      });
    });

    if (quizPrevBtn) quizPrevBtn.style.visibility = quizCurrentIndex === 0 ? "hidden" : "visible";
    if (quizNextBtn) {
      quizNextBtn.disabled = userAnswers[quizCurrentIndex] === undefined;
      quizNextBtn.textContent = quizCurrentIndex === quizQuestions.length - 1 ? "Lihat Hasil Rekomendasi ✨" : "Lanjut ➔";
    }
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", () => {
      if (userAnswers[quizCurrentIndex] === undefined) {
        alert("Silakan pilih salah satu jawaban terlebih dahulu!");
        return;
      }

      if (quizCurrentIndex < quizQuestions.length - 1) {
        quizCurrentIndex++;
        renderQuizQuestion();
      } else {
        calculateQuizResult();
      }
    });
  }

  if (quizPrevBtn) {
    quizPrevBtn.addEventListener("click", () => {
      if (quizCurrentIndex > 0) {
        quizCurrentIndex--;
        renderQuizQuestion();
      }
    });
  }

  function calculateQuizResult() {
    // Tentukan tanaman terbaik berdasarkan jawaban pengguna
    // Jawaban filosofi (pertanyaan ke-3 index 2) menjadi bobot utama, dengan fallback ke monstera/sansevieria
    const selectedPhilosophyTrait = quizQuestions[2].options[userAnswers[2]]?.trait;
    let matchedPlant = plantsData.find((p) => p.id === selectedPhilosophyTrait);

    if (!matchedPlant) {
      // Fallback berdasarkan kategori
      const selectedCategoryTrait = quizQuestions[3].options[userAnswers[3]]?.trait;
      matchedPlant = plantsData.find((p) => p.category === selectedCategoryTrait) || plantsData[0];
    }

    if (quizCardQuestion) quizCardQuestion.style.display = "none";
    if (quizResultView) {
      quizResultView.style.display = "block";
      quizResultPlantName.textContent = matchedPlant.name;
      quizResultPlantScientific.textContent = matchedPlant.scientificName;
      quizResultPhilosophy.textContent = matchedPlant.philosophy;
      quizResultCare.textContent = `${matchedPlant.lightLabel} • ${matchedPlant.waterLabel}`;

      if (quizResultDetailBtn) {
        quizResultDetailBtn.onclick = () => openPlantModal(matchedPlant.id);
      }
    }
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener("click", () => {
      quizCurrentIndex = 0;
      userAnswers.length = 0;
      if (quizCardQuestion) quizCardQuestion.style.display = "block";
      if (quizResultView) quizResultView.style.display = "none";
      renderQuizQuestion();
    });
  }

  renderQuizQuestion();

  /* ==========================================================================
     7. FITUR INTERAKTIF: KALKULATOR JADWAL SIRAM TANAMAN
     ========================================================================== */
  const calcPlantSelect = document.getElementById("calc-plant-select");
  const calcEnvSelect = document.getElementById("calc-env-select");
  const calcSeasonSelect = document.getElementById("calc-season-select");
  const calcSubmitBtn = document.getElementById("calc-submit-btn");
  const calcResultSchedule = document.getElementById("calc-result-schedule");
  const calcResultTips = document.getElementById("calc-result-tips");

  // Isi Dropdown Tanaman dari Basis Data plantsData
  if (calcPlantSelect) {
    calcPlantSelect.innerHTML = plantsData
      .map((p) => `<option value="${p.id}">${p.name} (${p.categoryLabel})</option>`)
      .join("");
  }

  function calculateWatering() {
    if (!calcPlantSelect || !calcEnvSelect || !calcSeasonSelect) return;

    const plantId = calcPlantSelect.value;
    const env = calcEnvSelect.value;
    const season = calcSeasonSelect.value;
    const plant = plantsData.find((p) => p.id === plantId);

    if (!plant) return;

    let baseInterval = plant.waterInterval || 5;

    // Modifikasi berdasarkan Lingkungan
    if (env === "indoor-ac") {
      baseInterval = Math.round(baseInterval * 1.3); // AC memperlambat penguapan tanah
    } else if (env === "outdoor-sun") {
      baseInterval = Math.max(1, Math.round(baseInterval * 0.6)); // Panas terik mempercepat kering
    } else if (env === "outdoor-shade") {
      baseInterval = Math.round(baseInterval * 0.9);
    }

    // Modifikasi berdasarkan Musim
    if (season === "hujan") {
      baseInterval = Math.round(baseInterval * 1.4); // Lembap tinggi
    } else if (season === "kemarau") {
      baseInterval = Math.max(1, Math.round(baseInterval * 0.75));
    }

    let intervalText = "";
    if (baseInterval <= 1) {
      intervalText = "Siram Setiap Hari (1 Hari Sekali di Pagi Hari)";
    } else if (baseInterval <= 3) {
      intervalText = `Siram Setiap ${baseInterval} Hari Sekali`;
    } else if (baseInterval <= 7) {
      intervalText = `Siram 1 Kali Seminggu (Interval ~${baseInterval} Hari)`;
    } else {
      intervalText = `Siram 1 Kali Setiap ${baseInterval} Hari (Kering Maksimal)`;
    }

    if (calcResultSchedule) calcResultSchedule.textContent = intervalText;
    if (calcResultTips) {
      calcResultTips.innerHTML = `
        <strong>💡 Tips Khusus untuk ${plant.name}:</strong><br>
        • Selalu lakukan <em>Finger Test</em>: Tusuk jari sedalam 2-3 cm ke tanah. Siram hanya bila jari terasa kering tanpa remahan tanah basah.<br>
        • Kondisi: <strong>${env === "indoor-ac" ? "Ruangan Ber-AC (Penguapan lambat)" : "Area Berventilasi"}</strong> dan <strong>${season === "hujan" ? "Musim Hujan (Kelembapan tinggi)" : "Musim Kemarau (Cepat haus)"}</strong>.<br>
        • Bahaya Terbesar: <em>Overwatering</em> menyebabkan pembusukan akar yang sering disalahartikan sebagai kekurangan air!
      `;
    }
  }

  if (calcSubmitBtn) {
    calcSubmitBtn.addEventListener("click", calculateWatering);
  }

  /* ==========================================================================
     8. VALIDASI FORMULIR KONSULTASI / KLINIK BOTANI
     ========================================================================== */
  const consultationForm = document.getElementById("consultation-form");
  if (consultationForm) {
    consultationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const topic = document.getElementById("contact-topic").value;
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        showToast("Mohon lengkapi semua data formulir!", 3000);
        return;
      }

      // Simulasi Pengiriman Sukses
      showToast(`Terima kasih Kak ${name}! Pesan konsultasi mengenai [${topic}] berhasil terkirim.`, 4000);
      consultationForm.reset();
    });
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION & BACK TO TOP & HAMBURGER
     ========================================================================== */
  let toastTimer;
  function showToast(message, duration = 3000) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  }

  // Back to Top Button
  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Hamburger Menu Mobile
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Tutup nav saat link diklik
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Inisialisasi Tampilan Awal
  filterAndRenderPlants();
  updateFavoriteUI();
  calculateWatering();
});
