<template>
    <header class="site-header">
        <!-- Левый блок - название студии -->
        <div class="studio-name">Студия фото и видеосъёмки</div>

        <!-- Центральный блок - основная навигация -->
        <nav class="main-nav">
            <router-link to="/specialists">Специалисты</router-link>
            <router-link to="/best">Лучшие работы</router-link>
            <router-link to="/pric">Тарифы</router-link>
        </nav>

        <!-- Правый блок - избранное и вход -->
        <nav class="right-nav">
            <router-link to="/favourites" class="favourite-link">
                <span class="heart">🤍</span>
            </router-link>
            <router-link to="/enter" class="enter">ВОЙТИ</router-link>
        </nav>
    </header>
</template>

<script>
export default { name: 'Header' }
</script>

<style scoped>
.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
    background-color: #252525;
    color: #fff;
    font-family: Arial, sans-serif;
    position: relative;
}

.studio-name {
    font-size: 16px;
    color: #fff;
    font-weight: normal;
    flex: 1;
}

.main-nav {
    display: flex;
    gap: 40px;
    flex: 1;
    justify-content: center;
}

.main-nav a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #cccccc;
}

.main-nav a.router-link-active {
    font-weight: bold;
}

.right-nav {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
    justify-content: flex-end;
}

.favourite-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.heart {
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

.enter {
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px 20px;
    transition: all 0.3s;
}

.enter:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
    .site-header {
        padding: 15px 20px;
        flex-direction: column;
        gap: 15px;
    }

    .main-nav {
        gap: 20px;
    }

    .right-nav {
        justify-content: center;
    }
}
</style>