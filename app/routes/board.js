import Abstractroute from "./Abstractroute";
import { action } from '@ember/object';

export default class BoardRoute extends Abstractroute {
  model(){
    return this.userAuth.getUser();
  }
  @action logout(){
    this.userAuth.logout();
    this.refresh();
  }
}
