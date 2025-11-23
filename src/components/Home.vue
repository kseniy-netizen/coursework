<script setup>
// Вставляем это для этого: <script setup> — это синтаксический сахар для Composition API в Vue 3.
// Он позволяет писать логику компонента прямо в <script> без необходимости возвращать свойства.
// Для простых статических страниц, как эта, может быть пустым.
</script>

<template>
    <div class="home-page">
        <!-- Hero Section с изображением и текстом -->
        <section class="hero-section">
            <!-- Предполагаем, что у вас есть изображение в src/assets/hero-bg.jpg -->
            <img src="../assets/Group 363.png" alt="Capture Studio Hero Background" class="hero-image">
            <div class="hero-content">
                <p class="studio-tagline">Студия фото и видеосъёмки</p>
            </div>
        </section>

        <!-- Секция "О нас" или вводный текст -->
        <section class="about-section page-section">
            <p>
                Фотография – это искусство останавливать время, позволяющее вам вновь и вновь переживать самые
                счастливые моменты вашей жизни. Мы верим, что каждый человек уникален, и каждый момент особенен.
            </p>
            <p>
                Мы стремимся запечатлеть вашу индивидуальность и сохранить ваши самые ценные воспоминания в уникальных и
                неповторимых фотографиях. Мы создаем не просто изображения, а настоящие истории, которые будут радовать
                вас и ваших близких долгие годы. Позвольте нам стать частью вашей истории!
            </p>
        </section>

        <!-- Можно добавить секцию с примерами работ или призывами к действию -->
        <section class="call-to-action page-section">
            <h3>Наши услуги включают:</h3>
            <ul>
                <li>Профессиональные фотосессии (портретные, семейные, свадебные)</li>
                <li>Создание рекламных и корпоративных видео</li>
                <li>Аэросъемка с дрона</li>
                <li>Репортажная съемка событий</li>
            </ul>
            <p>
                <router-link to="/photos" class="btn">Посмотреть фото</router-link>
                <router-link to="/video" class="btn">Посмотреть видео</router-link>
            </p>
        </section>
    </div>
</template>


<style scoped>
/* Вставляем это для этого: <style scoped> — это CSS-стили, которые применяются только к этому компоненту.
   Это помогает избежать конфликтов стилей между разными компонентами. */
   
.home-page {
    text-align: center;
        color: #333;
    }
    
    .hero-section {
        position: relative;
        width: 100%;
        height: 600px;
        /* Высота hero-секции */
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* Выравнивание по левому краю */
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
    
    .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* Изображение будет покрывать всю секцию */
        /* filter: brightness(0.7); */
        /* Немного затемняем изображение для лучшей читаемости текста */
        z-index: 1;
    }
    
    .hero-content {
        position: relative;
        z-index: 2;
        /* Поверх изображения */
        text-align: left;
        padding: 0px 20px;
        /* Отступ от краев */
        max-width: 800px;
        /* Максимальная ширина текстового блока */
    }
    
    
    .studio-tagline {
        font-size: 1.8em;
        margin-top: 110px;
        font-weight: 300;
        letter-spacing: 1px;
    }
    
    .page-section {
        max-width: 960px;
        margin: 40px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        text-align: left;
    }
    
    .page-section h3 {
        color: #2c3e50;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .page-section p {
        line-height: 1.8;
        margin-bottom: 15px;
    }
    
    .page-section ul {
        list-style: none;
        padding: 0;
        margin-bottom: 20px;
    }
    
    .page-section ul li {
        background-color: #f9f9f9;
        margin-bottom: 10px;
        padding: 10px 15px;
        border-left: 4px solid #f0a500;
        border-radius: 4px;
    }
    
    .btn {
        display: inline-block;
        background-color: #f0a500;
        color: white;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        margin: 10px;
        transition: background-color 0.3s ease;
    }
    
    .btn:hover {
        background-color: #e49400;
    }
</style>
