const Controller = class{};
const controllers = new Map([
  ["list_list", class extends Controller{}],
  ["list_view", class extends Controller{}],
  ["list_new", class extends Controller{}],
  ["list_edit", class extends Controller{}],
  ["list_remove", class extends Controller{}],
  ["todo_new", class extends Controller{}],
  ["todo_edit", class extends Controller{}],
  ["todo_remove", class extends Controller{}]
]);
const Router = class{
    route(path){
      new controllers[path]();
    }
  };
  const router = new Router();
  router.route('list_list');

  const list_list = class extends Controller{
    constructor(){
      super();
      const view = new List_list_view();
      //모델에게 뷰전달
      const model = new List_list_model(view);
      model.update();
    }
  };
  
//실제 목록엔티티의 클래스
const List = class{
    constructor(id, title){
      this.id = id;
      this.todo = [];
      this.title = title;
      //생성 시 저장소에 넣는다.
      List.instances.add(this);
    }
  };
  //실질적으로 목록인스턴스를 저장하는 저장소
  List.instances = new Set();
   
  //컨트롤러에 필요한 데이터를 공급하는 모델
  const List_list_model = class{
    get data(){
      //인스턴스의 배열을 준다.
      return [...List.instances];
    }
  };
  const List_list_view = class extends View{
    render(model){ //배열로 List인스턴스가 들어옴
      return `<ul>${model.reduce((str, v)=>str += `<li>${v.title}</li>`, "")}</ul>`;
    }
  };
  const list_list = class extends Controller{
    constructor(){
      super();
      const model = new List_list_model();
      const view = new List_list_view();
      this.result = view.render(model.data);
    }
  };
    
        
