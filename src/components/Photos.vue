<template>
    <div class="photos-page page-section">
        <h1>Наши работы - Фотографии</h1>
        <p>Погрузитесь в мир наших визуальных историй. Здесь вы найдете подборку лучших фотографий из различных
            проектов.</p>

        <div class="gallery">
            <!-- Предполагаем, что у вас есть изображения photo1.jpg, photo2.jpg и т.д. в src/assets/ -->
            <div class="gallery-item">
                <img src="../assets/photo1.jpg" alt="Фотография 1">
                <div class="caption">Свадебная фотосессия</div>
            </div>
            <div class="gallery-item">
                <img src="../assets/photo2.jpg" alt="Фотография 2">
                <div class="caption">Портретная съемка</div>
            </div>
            <div class="gallery-item">
                <img src="../assets/photo3.jpg" alt="Фотография 3">
                <div class="caption">Семейные моменты</div>
            </div>
            <div class="gallery-item">
                <img src="../assets/photo4.jpg" alt="Фотография 4">
                <div class="caption">Пейзаж</div>
            </div>
            <div class="gallery-item">
                <img src="../assets/photo5.jpg" alt="Фотография 5">
                <div class="caption">Мероприятия</div>
            </div>
            <div class="gallery-item">
                <img src="../assets/photo6.jpg" alt="Фотография 6">
                <div class="caption">Предметная съемка</div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.photos-page {
    text-align: center;
}

.photos-page h1 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.photos-page p {
    color: #666;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.gallery-item {
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.caption {
    padding: 15px;
    font-weight: bold;
    color: #333;
    background-color: #e9e9e9;
    font-size: 0.9em;
}

/* Общие стили для page-section, уже есть в Home.vue, но для ясности */
.page-section {
    max-width: 960px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>
