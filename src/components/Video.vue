<template>
    <div class="video-page page-section">
        <h1>Наши работы - Видео</h1>
        <p>Погрузитесь в динамичный мир наших видеороликов. От рекламных кампаний до трогательных семейных историй – мы
            создаем видео, которые вдохновляют.</p>

        <div class="video-grid">
            <div class="video-item">
                <h3>Свадебный клип "Любовь навсегда"</h3>
                <!-- Вставляем это для этого: iframe позволяет встраивать контент с других сайтов, например, видео с YouTube.
             Замените 'dQw4w9WgXcQ' на реальные ID ваших видео с YouTube. -->
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=..." frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class="video-description">Захватывающие моменты одного из наших последних свадебных проектов,
                    наполненные эмоциями и красотой.</p>
            </div>
            <div class="video-item">
                <h3>Корпоративный ролик "Инновации в движении"</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=..." frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class="video-description">Презентационный ролик для технологической компании, демонстрирующий их
                    подход к инновациям.</p>
            </div>
            <div class="video-item">
                <h3>Рекламный ролик "Вкус лета"</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=..." frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class="video-description">Динамичный ролик для кафе, передающий атмосферу свежести и вкуса их летнего
                    меню.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.video-page {
    text-align: center;
}

.video-page h1 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.video-page p {
    color: #666;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    /* Адаптивная сетка */
    gap: 30px;
    margin-top: 30px;
}

.video-item {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    text-align: left;
}

.video-item h3 {
    margin-top: 0;
    color: #333;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.video-item iframe {
    border-radius: 6px;
    margin-bottom: 15px;
}

.video-description {
    font-size: 0.9em;
    color: #555;
    line-height: 1.6;
}

/* Общие стили для page-section */
.page-section {
    max-width: 960px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>
