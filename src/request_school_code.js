const OPEN_API_URL = "http://open.neis.go.kr/hub/";
const API_NAME = "schoolInfo";
const fixedParams = {
    KEY : "2e191712000e470dac71cace19e334d9",
    TYPE : "json",
    pIndex : 1,
    pSize : 10,
    makeQuery : function() {
        return `KEY=${this.KEY}&TYPE=${this.TYPE}&pIndex=${this.pIndex}&pSize=${this.pSize}`;
    }
};


function getSchoolCode(ATPT_OFCDC_SC_CODE, SCHUL_NM) {

    const mutableParams = {
        ATPT_OFCDC_SC_CODE : ATPT_OFCDC_SC_CODE,
        SCHUL_NM : SCHUL_NM,
        makeQuery : function() {
            return `ATPT_OFCDC_SC_CODE=${this.ATPT_OFCDC_SC_CODE}&SCHUL_NM=${this.SCHUL_NM}`;
        }
    };

    const request_url = `${OPEN_API_URL}${API_NAME}?${fixedParams.makeQuery()}&${mutableParams.makeQuery()}`;
    console.log(request_url);
    return request_url;
}


