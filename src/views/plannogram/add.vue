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
                    <h1 class="m0">Add Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Increase the visibility of promotional products in our store highlights</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Background Image</label>
                </div>
                <label for="imageInput" class="custom-input-label">
                    <input
                    id="imageInput"
                    accept="image/*"
                    class="form-gambar"
                    type="file"
                    />
                </label>
            </div>
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Plannogram Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Plannogram Name"
                        v-model="inputValue"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Pilih hari"
                        v-model="inputHari"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                        v-model="inputValidFrom"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                        v-model="inputValidUntil"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">List Product</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled selected>Pilih Product</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Marketing</option>
                        <option value="3">Sales</option>
                    </select>
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-plannogram">
                    <button class="bt-submit-green"  @click="$emit('myEvent', inputValue, inputHari, inputValidFrom, inputValidUntil), print()">Add Plannogram</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'add-plannogram',
    data() {
    return {
      inputValue: '', // Properti untuk menyimpan nilai input
      inputHari: '',
      inputValidFrom: '',
      inputValidUntil: '',
    };
  },
  methods: {
    addPlannogram() {
        console.log(this.inputValue);
        this.$root.$emit("addPlannogram", this.inputValue);
        this.inputValue = '';
    },
    print() {
        console.log(this.inputValue + " " + this.inputHari + " " + this.inputValidFrom + " " + this.inputValidUntil);

    }

  }
  
}
</script>