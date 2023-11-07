<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Plannogram</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage Your Plannogram</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-plannogram">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PLANNOGRAM NAME</th>
                            <th>BACKGROUND IMAGE</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>PLANNOGRAM STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_user" :key="item.id">
                            <td class="center">{{ item.plannogramName }}</td>
                            <td class="center">{{ item.username }}
                                <div class="mt5">
                                    <router-link to="/edit-plannogram">
                                        <img src="https://static.miraheze.org/tampvanwiki/0/0a/Rusdi_Omaygot.png">
                                    </router-link>
                                </div>
                            </td>
                            <td class="center">{{ item.email }}</td>
                            <td class="center">
                                <div v-if="item.role === 1">
                                    <label class="label-green">{{item.validFrom}}</label>
                                </div>
                                <div v-if="item.role === 2">
                                    <label class="label-green">{{item.validFrom}}</label>
                                </div>
                                <div v-if="item.role === 3">
                                    <label class="label-green">tes</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-plannogram">
                                        <label class="label-green">{{item.validUntil}}</label>
                                    </router-link>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-plannogram">
                                        <label class="label-green">{{item.status}}</label>
                                    </router-link>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-plannogram">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-plannogram">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-plannogram',
	components: {
		Menu
	},
    data(){
        return {
            list_user: [
                {
                    id: "1",
                    plannogramName: "Flash Sale minggu ini",
                    username: "",
                    email: "Senin",
                    validFrom: "01-06-2021",
                    validUntil: "03-06-2021",
                    status: "Active",
                    role: 1
                },
                {
                    id: "2",
                    plannogramName: "Haifah Nur Zakiah",
                    username: "",
                    email: "Rabu",
                    validFrom: "04-06-2021",
                    validUntil: "04-06-2021",
                    status: "Active",
                    role: 2
                },

            ]
        }
    }
}
</script>