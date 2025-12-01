<template>
    <header class="header">
        <div class="brand">Capture Studio</div>

        <nav class="nav">
            <router-link to="/sections">Разделы</router-link>
            <router-link to="/specialists">Специалисты</router-link>
            <router-link to="/best" class="nowrap">Лучшие работы</router-link>
            <router-link to="/pric">Тарифы</router-link>
        </nav>

        <div class="actions">
            <router-link to="/favourites" class="fav">🤍</router-link>
            <router-link to="/enter" class="btn">ВОЙТИ</router-link>
        </div>
    </header>
</template>

<script>
export default { name: 'Header' }
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 100px;
    background: #252525;
    color: white;
    font-family: Arial, sans-serif;
}

.brand {
    font-size: 16px;
    font-weight: normal;
    flex: 1;
    white-space: nowrap;
}

.nav {
    display: flex;
    gap: 40px;
    flex: 1;
    justify-content: center;
}

.nav a {
    font-size: 16px;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    white-space: nowrap;
}

.nav a:hover {
    color: #ccc;
}

.nav a.router-link-active {
    font-weight: bold;
}

.nav a.nowrap {
    flex-shrink: 0;
    min-width: max-content;
}

.actions {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
    justify-content: flex-end;
}

.fav {
        font-size: 30px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            transition: color 0.3s;
            display: inline-block;
            line-height: 1;
}

.btn {
    font-size: 14px;
    color: white;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px 20px;
    transition: 0.3s;
    white-space: nowrap;
}

.btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Адаптивность */
@media (max-width: 1200px) {
    .header {
        padding: 20px 60px;
    }
}

@media (max-width: 992px) {
    .header {
        padding: 20px 40px;
    }

    .nav {
        gap: 20px;
    }

    .nav a {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 15px 20px;
        flex-wrap: wrap;
        gap: 15px;
    }

    .brand,
    .nav,
    .actions {
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .nav {
        flex-wrap: wrap;
        gap: 15px;
    }

    .nav a {
        font-size: 14px;
    }

    .nav a.nowrap {
        font-size: 13.5px;
    }

    .btn {
        font-size: 13px;
        padding: 6px 15px;
    }

    .fav {
        font-size: 26px;
    }
}

@media (max-width: 480px) {
    .nav {
        gap: 10px;
    }

    .nav a {
        font-size: 13px;
    }

    .nav a.nowrap {
        font-size: 12.5px;
    }

    .btn {
        font-size: 12px;
        padding: 5px 12px;
    }

}
</style>