<template>
    <header class="site-header">
        <div class="logo">Capture Studio</div>
        <nav>
            <router-link to="/">Специалисты </router-link>
            <router-link to="/best">Лучшие работы</router-link>
            <router-link to="/pric">Тарифы</router-link>
        </nav>
        <nav>
            <router-link to="/favourites"><img src="/src/assets/qwer.svg" class="heart" alt="Избранное"></router-link>
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
    padding: 18px 100px;
    background-color: rgba(37, 37, 37, 0.5);
    color: #fff;
}

nav a {
    font-size: 16px;
    color: #fff;
    margin-left: 30px;
    text-decoration: none;
    position: relative;
    text-align: center;
}

nav .enter {
    font-size: 14px;
    border: 1px solid white;
    border-radius: 10px;
    display: inline-block;
    padding: 2px 4px;
}
.logo{
    font-size: 18px;
}
.heart{
    padding-top: 10px;
}

</style>

