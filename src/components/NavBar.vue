<template>
    <div class="nabar-container">
        <nav class="navbar navbar-light navbar-expand-md py-3">
            <div class="container">
				<a class="navbar-brand d-flex align-items-center" href="/">
					<span class="navbar-mainlink" >KSD Prediction</span>
				</a>
				<button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2" >
					<span class="visually-hidden">Toggle navigation</span>
					<span class="navbar-toggler-icon"></span>
				</button>
                <div class="collapse navbar-collapse" id="navcol-2" >
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
							<a class="nav-link" href="#">Intradía</a>
						</li>
                        <li class="nav-item">
							<a class="nav-link" href="#">Ranking</a>
						</li>
                        <li class="nav-item">
							<a class="nav-link" href="#">Simulador</a>
						</li>
                    </ul>
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


