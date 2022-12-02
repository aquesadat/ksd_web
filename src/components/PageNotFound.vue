<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Página no encontrada.</p>
            <p class="lead">
                La página a la que intentas acceder no existe.
                </p>
            <a href="#" @click="$router.push({ name: 'home' })" class="btn btn-primary">Ir a la home</a>
        </div>
    </div>
</template>