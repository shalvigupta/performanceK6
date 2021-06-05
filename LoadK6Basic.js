
import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export default function() {
  var url = "";
  var params =  { headers: { }

};
let res = http.get(url, params);
check(res, {
  "is status 200": (r) => r.status === 200
});
  sleep(1);
};