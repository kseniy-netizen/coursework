<script>
export default {
    name: 'App'
}
// Вставляем это для этого: <script setup> — это синтаксический сахар для Composition API в Vue 3.
// Он позволяет писать логику компонента прямо в <script> без необходимости возвращать свойства.
// Для простых статических страниц, как эта, может быть пустым.



// Vue.createApp({
//     data() {
//         return {
//             selectedSection: null
//         }
//     }
// }).mount('#app');




// createApp({
//     data() {
//         return {
//             selectedSection: null
//         }
//     },
//     methods: {
//         selectSection(section) {
//             this.selectedSection = section;
//             // Дополнительная логика при выборе раздела
//             console.log('Выбран раздел:', section);

//             // Можно добавить навигацию или другие действия
//             if (section === 'photo') {
//                 // Переход к разделу фотосъёмки
//                 window.location.href = '#photo-section';
//             } else if (section === 'video') {
//                 // Переход к разделу видеосъёмки
//                 window.location.href = '#video-section';
//             }
//         }
//     },
//     mounted() {
//         // Инициализация при загрузке
//         console.log('Компонент загружен');
//     }
// }).mount('#app');


</script>

<template>
    <div class="home-page">
        <!-- Hero Section с изображением и текстом -->
        <section class="hero-section">
            <p class="hero-heading">Capture Studio</p>
            <img src="../assets/images/girl.png" alt="Capture Studio Hero Background" class="hero-image">
            <div class="p-content">
                <!-- <p class="studio-tagline">Услуги фото и видеосъёмки</p> -->
            </div>
        </section>

        <main class="main">
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-text">
                        <img src="/src/assets/icons/points.svg" alt="Три точки">
                        <p class="hero-text">
                            ФОТОГРАФИЯ – ЭТО ИСКУССТВО ОСТАНАВЛИВАТЬ ВРЕМЯ, ПОЗВОЛЯЮЩЕЕ ВАМ ВНОВЬ И ВНОВЬ ПЕРЕЖИВАТЬ
                            САМЫЕ СЧАСТЛИВЫЕ МОМЕНТЫ ВАШЕЙ ЖИЗНИ. МЫ ВЕРИМ, ЧТО КАЖДЫЙ ЧЕЛОВЕК УНИКАЛЕН,
                            И КАЖДЫЙ МОМЕНТ ОСОБЕНЕН.
                        </p>
                        <p class="hero-text">
                            МЫ СТРЕМИМСЯ ЗАПЕЧАТЛЯТЬ ВАШУ ИНДИВИДУАЛЬНОСТЬ И СОХРАНИТЬ ВАШИ САМЫЕ ЦЕННЫЕ
                            ВОСПОМИНАНИЯ В УНИКАЛЬНЫХ И НЕПОВТОРИМЫХ ФОТОГРАФИЯХ. МЫ СОЗДАЕМ НЕ ПРОСТО
                            ИЗОБРАЖЕНИЯ, А НАСТОЯЩИЕ ИСТОРИИ, КОТОРЫЕ БУДУТ РАДОВАТЬ ВАС И ВАШИХ БЛИЗКИХ
                            ДОЛГИЕ ГОДЫ. ПОЗВОЛЬТЕ НАМ СТАТЬ ЧАСТЬЮ ВАШЕЙ ИСТОРИИ!
                        </p>
                        <img src="/src/assets/icons/points.svg" alt="Три точки">
                    </div>
                </div>
            </section>
            <section class="cta">
                <div class="content">
                    <div class="subtitle">Выберите интересующий<br>Вас раздел:</div>
                </div>
                <div class="other-buttons">
                    <button class="gradient-btn">ФОТОСЪЁМКА</button>
                    <button class="gradient-btn">ВИДЕОСЪЁМКА</button>
                </div>
            </section>



            <section class="specialists-section">
                <!-- Заголовок -->
                <h2 class="section-title">НАШИ СПЕЦИАЛИСТЫ</h2>
                <div class="divider">
                </div>

                <div class="s-cards-container">
                    <!-- Специалист 1: ДЭРРИЛ САЙПС -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="../assets/images/specialist-1.png" alt="ДЭРРИЛ САЙПС" class="s-image" />
                        </div>
                        <h3 class="s-name">ДЭРРИЛ САЙПС</h3>
                        <p class="s-tagline">ЗАХВАТЫВАЮЩИЕ ФОТОГРАФИИ И ДИНАМИЧНЫЕ ВИДЕО ДЛЯ ВАШИХ САМЫХ ЯРКИХ
                            СОБЫТИЙ</p>
                        <p class="s-description">Дэррил – мастер ловить лучшие моменты! Он создает незабываемые
                            снимки и захватывающие видеоролики для любых мероприятий – от семейных торжеств до
                            крупных корпоративов. Его талант позволяет запечатлеть искренние эмоции, важные детали и
                            волнующие мгновения, чтобы вы могли их снова переживать.</p>
                    </div>

                    <!-- Специалист 2: РУБИ СПАРК -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="../assets/images/specialist-2.png" alt="РУБИ СПАРК" class="s-image" />
                        </div>
                        <h3 class="s-name">РУБИ СПАРК</h3>
                        <p class="s-tagline">ПРОФЕССИОНАЛЬНОЕ ФОТО И ВИДЕО ДЛЯ ВАШЕГО БИЗНЕСА И НЕДВИЖИМОСТИ</p>
                        <p class="s-description">Руби – эксперт в создании эффективного визуального контента для
                            привлечения клиентов и увеличения продаж. Она специализируется на бизнес-рекламе и
                            съемке недвижимости, помогая вам выгодно представить свои товары и услуги.</p>
                    </div>

                    <!-- Специалист 3: АЛЕКСАНДРА ВАЛЬТЕР -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="../assets/images/specialist-3.png" alt="АЛЕКСАНДРА ВАЛЬТЕР" class="s-image" />
                        </div>
                        <h3 class="s-name">АЛЕКСАНДРА ВАЛЬТЕР</h3>
                        <p class="s-tagline">ЧУВСТВУЕТ ВАШИ ЭМОЦИИ, СОЗДАЕТ ФОТО И ВИДЕО ОТРАЖАЮЩИЕ ВАШУ
                            УНИКАЛЬНОСТЬ</p>
                        <p class="s-description">Александра – эксперт в создании элегантных образов и раскрытии
                            индивидуальности в каждом кадре. Она тонко чувствует ваши эмоции и мастерски переносит
                            их на камеру, создавая фото и видео, которые по-настоящему отражают вашу уникальность.
                        </p>
                    </div>
                </div>
            </section>
            <!-- Наши лучшие работы  -->
            <section>
                <div class="portfolio-section">
                    <h2>Наши лучшие работы</h2>

                    <!-- Контейнеры для линий -->

                    <div class="gallery-center-line"><img src="../assets/images/line.png" alt="Линия">
                    </div>


                    <div class=" gallery-grid">
                        <div class="grid-item item-1">
                            <img src="../assets/images/best-work-1.jpg" alt="Силуэты девушек на закате">
                        </div>
                        <div class="grid-item item-2">
                            <img src="../assets/images/best-work-2.jpg" alt="Поцелуй молодоженов">
                        </div>
                        <div class="grid-item item-3">
                            <img src="../assets/images/best-work-3.jpg" alt="Мужчина с камерой на фоне взрыва">
                        </div>
                        <div class="grid-item item-4">
                            <img src="../assets/images/best-work-4.jpg" alt="Групповое фото людей">
                        </div>
                        <div class="grid-item item-5">
                            <img src="../assets/images/best-work-5.jpg" alt="Торт на вечеринке">
                        </div>
                        <div class="grid-item item-6">
                            <img src="../assets/images/best-work-6.jpg" alt="Человек в синем свете">
                        </div>
                    </div>
                </div>


            </section>

        </main>
    </div>
</template>


<style scoped>
/* Вставляем это для этого: <style scoped> — это CSS-стили, которые применяются только к этому компоненту.
   Это помогает избежать конфликтов стилей между разными компонентами. */
   
    * {
      margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: Arial, sans-serif;
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
    
    .p-content {
        position: relative;
        z-index: 2;
        /* Поверх изображения */
        text-align: left;
        padding: 0px 20px;
        max-width: 800px;
        /* Максимальная ширина текстового блока */
    }
    
    
    .studio-tagline {
        font-size: 1.8em;
        margin-top: 110px;
        margin-left: 10px;
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

        .hero {
            color: rgb(0, 0, 0);
            padding: 1rem 0;    
        }
        
        .hero-text {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }


        .hero-text img{
            padding: 35px 0px;
        }
/* Выберите раздел - текст */                
                .cta {
                    text-align: center;
                }

                .subtitle{
                    font-size: 1.7rem;
                    color: #000000;
                }


                .other-buttons{
                    margin-top: 6px;
                }
                
                .gradient-btn {
                    padding: 12px 0;
                    font-size: 18px;
                    font-weight: 700;
                    color: #000000;
                    background: linear-gradient(135deg,
                            #957062,
                            #FFB194,
                            #957062);
                    border: none;
                    border-radius: 18px;
                    cursor: pointer;
                    text-transform: uppercase;
                    transition: all 0.3s ease;
                    font-family: Arial, sans-serif;
                    letter-spacing: 1px;
                    box-shadow:
                        0 4px 15px #957062,
                        0 1px 3px rgba(0, 0, 0, 0.2);
                    position: relative;
                    overflow: hidden;
                    margin: 10px;
                    min-width: 200px;
                }


/* СПециалисты */


.specialists-section {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
}

.section-title {
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: #000;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: #000;
    margin: 0 auto 40px;
}

.specialists-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
}

.specialists-container::before,
.specialists-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ddd;
}

.specialists-container::before {
    left: calc(33.333% - 15px);
}

.specialists-container::after {
    right: calc(33.333% - 15px);
}

.specialist-card {
    padding: 0 15px;
    text-align: left;
}

.specialist-name {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: #000;
    line-height: 1.3;
}

.specialist-tagline {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #000;
    line-height: 1.4;
    text-transform: uppercase;
}

.specialist-description {
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin: 0;
}

/* специалисты */
.s-section-wrapper {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    box-sizing: border-box;
    color: #333;
    background-color: #fff;
}

.s-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
}

.s-card {
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    background-color: #ffffff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-direction: column;
}

.s-image-frame {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border: 2px solid #000000;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.s-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.s-name {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: #333;
}

.s-tagline {
    font-size: 0.9em;
    color: #777;
    text-transform: uppercase;
    margin: 0 0 15px 0;
    line-height: 1.4;
}

.s-description {
    font-size: 1em;
    color: #555;
    line-height: 1.6;
    margin: 0;
    flex-grow: 1;
}



/* наши лучшие работы */



.portfolio-section {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    font-family: sans-serif;
    position: relative;
}

h2 {
    font-size: 2.4em;
    color: #333;
    margin-bottom: 25px;
    text-align: left;
}

.gallery-grid {
    display: grid;
    grid-template-areas:
        "item1 item1 item2"
        "item3 item4 item4"
        "item3 item5 item6";
    grid-template-columns: 1.5fr 1.2fr 1fr;
    grid-auto-rows: minmax(180px, auto);
    gap: 15px;
}

.grid-item {
    border-radius: 12px;
    overflow: hidden;
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.item-1 {
    grid-area: item1;
}

.item-2 {
    grid-area: item2;
}

.item-3 {
    grid-area: item3;
}

.item-4 {
    grid-area: item4;
}

.item-5 {
    grid-area: item5;
}

.item-6 {
    grid-area: item6;
}

/* --- Стили для одной линии по центру --- */
.gallery-center-line {
    position: absolute;
    left: -300px;
    top: 300px;
    z-index: -1;
    /* Линия будет располагаться под элементами галереи */
}

@media (max-width: 1024px) {
    .s-card {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 768px) {
    .s-section-wrapper {
        padding: 15px;
    }

    .s-card {
        flex: 1 1 100%;
        max-width: 100%;
    }

    .s-section-title {
        font-size: 1.8em;
        margin-bottom: 30px;
    }

    .s-nav-tabs {
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 25px;
    }

    .s-nav-button {
        padding: 8px 15px;
        font-size: 13px;
    }
}


        @media (max-width: 768px) {
            .header .container {
                flex-direction: column;
                gap: 1rem;
            }
    
            .nav {
                flex-wrap: wrap;
                justify-content: center;
            }
    
            .hero-text {
                font-size: 1rem;
            }
    
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
    
            .cta-button {
                width: 100%;
                max-width: 300px;
            }
        }
</style>
