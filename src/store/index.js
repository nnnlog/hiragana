import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		complete: 0,
		correct: 0,
		list: [
			{text: "あ", speak: "a"},
			{text: "い", speak: "i"},
			{text: "う", speak: "u"},
			{text: "え", speak: "e"},
			{text: "お", speak: "o"},
			{text: "か", speak: "ka"},
			{text: "き", speak: "ki"},
			{text: "く", speak: "ku"},
			{text: "け", speak: "ke"},
			{text: "こ", speak: "ko"},
			{text: "さ", speak: "sa"},
			{text: "し", speak: "shi"},
			{text: "す", speak: "su"},
			{text: "せ", speak: "se"},
			{text: "そ", speak: "so"},
			{text: "た", speak: "ta"},
			{text: "ち", speak: "chi"},
			{text: "つ", speak: "tsu"},
			{text: "て", speak: "te"},
			{text: "と", speak: "to"},
			{text: "な", speak: "na"},
			{text: "に", speak: "ni"},
			{text: "ぬ", speak: "nu"},
			{text: "ね", speak: "ne"},
			{text: "の", speak: "no"},
			{text: "は", speak: "ha"},
			{text: "ひ", speak: "hi"},
			{text: "ふ", speak: "hu"},
			{text: "へ", speak: "he"},
			{text: "ほ", speak: "ho"},
			{text: "ま", speak: "ma"},
			{text: "み", speak: "mi"},
			{text: "む", speak: "mu"},
			{text: "め", speak: "me"},
			{text: "も", speak: "mo"},
			{text: "や", speak: "ya"},
			{text: "ゆ", speak: "yu"},
			{text: "よ", speak: "yo"},
			{text: "ら", speak: "ra"},
			{text: "り", speak: "ri"},
			{text: "る", speak: "ru"},
			{text: "れ", speak: "re"},
			{text: "ろ", speak: "ro"},
			{text: "わ", speak: "wa"},
			{text: "を", speak: "o"},
			{text: "ん", speak: "n"}
		]
	},
	mutations: {},
	actions: {
		getHiragana({state}) {
			return state.list;
		}
	},
	modules: {}
})
