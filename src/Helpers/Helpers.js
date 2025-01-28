

class neysanSite {
	constructor() {
		this.lng = localStorage.getItem("lang") || "az",
	    // this.baseUrl = "https://ziraolive.looptech.az/api";
        // this.baseUrlImage = "https://ziraolive.looptech.az/storage/";
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }
    api() {
        return axios.create({  
            baseURL: this.baseUrl,
            headers: this.headers,
        });
    }
}
	
const neysan = new neysanSite();

export default neysan;

