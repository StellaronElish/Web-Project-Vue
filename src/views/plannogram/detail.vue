<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-plannogram">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Your plannogram details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50">
                <p>Plannogram Name</p>
                <h2>Vioni Wita Elya</h2>
            </div>
            <div class="mt10 flex">
                <p class="detail-title-bold">Broadcast Schedule : </p>
                <p>viowelya</p>
            </div>
            <div class ="plano-until">
                <div >
                    <p class="detail-title-bold">Plannogram Status</p>
                    <hr class="uline-grey">

                    <label class="label-green">Super Admin</label>
                </div>
                <div>
                    <p class="detail-title-bold">Valid From</p>
                    <hr class="uline-grey">

                    <label class="label-green">Super Admin</label>
                </div>
                <div>
                    <p class="detail-title-bold">Valid Until</p>
                    <hr class="uline-grey">

                    <label class="label-green">Super Admin</label>
                </div>
            </div>
            <div>
                <p class="detail-title-bold">Valid Until</p>
                <label class="label-green">Super Admin</label>
            </div>
            <div>
                <p class="detail-title-bold">List Product</p>
                <label class="label-green">Super Admin</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-plannogram'
}
</script>