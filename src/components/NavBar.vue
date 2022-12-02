<template>
    <div class="nabar-container">
        <nav class="navbar navbar-light navbar-expand-md py-3">
            <div class="container">
				<a class="navbar-brand d-flex align-items-center" href="#" @click="$router.push({ name: 'home' })">
					<span class="navbar-mainlink" >KSD Prediction</span>
				</a>                
                <img data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2" src="@/assets/img/beta2.png" width="100" style="background: #202739;" alt="Beta">                
                <div class="collapse navbar-collapse text-end" id="navcol-2" >
                    <div class="navbar-nav ms-auto">
                        <img src="@/assets/img/beta2.png" width="95" alt="Beta">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#navcol-2 {
    margin-right: 0px;
}

.nabar-container {
    background: #202739;
}

.navbar-mainlink {
    color: rgba(252,251,251,0.9);
    font-size: 21px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 0px;
    font-weight: bold;
}

.navbar-toggler {
    color: rgba(242,229,229,0.55);
    background: #3d7db8;
}

.nav-link {
    color: #fcfbfb;
    margin-right: 0px;
    padding-left: 9px;
}

</style>


