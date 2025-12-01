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
                <div class="container">
                    <h2>Выберите интересующий Вас раздел:</h2>
                    <div class="cta-buttons">
                        <button class="cta-button" :class="{ active: selectedSection === 'photo' }"
                            @click="selectedSection = 'photo'">
                            Фотосъёмка
                        </button>
                        <button class="cta-button" :class="{ active: selectedSection === 'video' }"
                            @click="selectedSection = 'video'">
                            Видеосъёмка
                        </button>
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
            padding: 3rem 0;
        }
        
        .hero-text {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            text-align: center;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }
        .hero-text img{
            padding: 35px 0px;
        }
                .cta {
                    text-align: center;
                    padding: 20px;
                }
        
                .cta h2 {
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    color: #000000;
                    line-height: 1.4;
                    max-width: 450px;
                    text-align: center;
                }
        
                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
        
                .cta-button {
                    padding: 15px 25px;
                    font-size: 1.1rem;
                    border: 2px solid #007bff;
                    background-color: white;
                    color: #007bff;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    min-height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
        
                .cta-button.active {
                    background-color: #007bff;
                    color: white;
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
