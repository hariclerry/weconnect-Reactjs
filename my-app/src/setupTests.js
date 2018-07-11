import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import mocklocalStorage from "tests/localStorage"

configure({ adapter: new Adapter( )});

global.localStorage = mocklocalStorage;
