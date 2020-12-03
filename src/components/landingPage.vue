<template>


  <div
      class="ma-6"
  >
    <div
        v-show="!dataSaved"
    >
      <h2
          style="padding: 1rem 0 1rem 1rem"
      >השאירו פרטים לחזרה</h2>


      <v-text-field
          label="שם"
          background-color="white"
          outlined
          required
          v-model="name"
      >
      </v-text-field>


      <v-text-field
          label="טלפון"
          background-color="white"
          outlined
          v-model="phoneNumber"
          required
      >
      </v-text-field>

      <v-text-field
          label="אימייל"
          background-color="white"
          outlined
          v-model="email"
      >
      </v-text-field>
      <v-text-field
          label="שם המוסד"
          background-color="white"
          outlined
          v-model="instituteName"
      >
      </v-text-field>

      <v-checkbox
          class="pa-0 ma-0"
          v-model="checked"
          label="אני מאשר לקבל פרסומים ועדכונים מאדרבה"
      ></v-checkbox>
      <div
          style="display: flex; justify-content: flex-end; padding-right: 1rem;"
      >
        <v-btn
            depressed
            color="#194d74"
            style="margin-bottom: 1rem;"
            class="white--text"
            @click="submit"
            type="submit"
            x-large

        >
          צרו איתי קשר!
        </v-btn>
      </div>

    </div>
    <div
        v-show="dataSaved"
        style="padding-bottom: 2rem"
    >
      <h1>תודה על פנייתך</h1>
      <h1>בקרוב נחזור אליך</h1>
      <h1>ליצירת אירוע מושלם</h1>

    </div>

  </div>


</template>

<script>
import firebaseApi from "@/firebase/firebaseApi";

export default {
  name: "landingPage",
  data: () => ({
    name: "",
    phoneNumber: null,
    email: '',
    instituteName: '',
    checked: false,
    dataSaved: false
  }),
  methods: {
    async submit() {

      let leadDetails = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        instituteName: this.instituteName,
        checked: this.checked
      }
      let response = await firebaseApi.writeData(leadDetails, 'leads')
      if (response.key) {
        this.dataSaved = true
      }

    }
  }
}
</script>

<style scoped>
.v-label {
  color: white;
}

.custom-label-color .v-label {
  color: white;
  opacity: 1;
}

.theme--light.v-input.search-field input::placeholder {
  color: black;
}
</style>