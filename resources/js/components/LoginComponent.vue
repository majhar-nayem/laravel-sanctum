<template>
    <v-app id="inspire">
        <v-main>
            <v-container
                class="fill-height"
                fluid
            >

                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                    >
                        <v-form action="#" @submit.prevent="handleLogin">
                        <v-card class="elevation-12">
                            <v-toolbar
                                color="success"
                                dark
                                flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Login"
                                        name="login"
                                        v-model="formData.email"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        id="password"
                                        v-model="formData.password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn block color="success" type="submit"  >Login</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                email: '',
                password : ''
            },
        }
    },
    methods : {
        handleLogin() {
             this.$http.get('/sanctum/csrf-cookie').then(response => {
                 console.log('You Got Sanctum Cookies');
                this.$http.post('login', this.formData).then(res => {
                    this.getUserDetails();
                });
            });
        },
        getUserDetails(){
            this.$http.get('api/user').then(res => {
               console.log(res.data);
            });
        }
    }
}
</script>
