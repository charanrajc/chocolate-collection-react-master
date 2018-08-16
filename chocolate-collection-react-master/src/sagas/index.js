import {getBrandsWatcher} from './brands';
import {getChocolatesWatchers} from './chocolates';

export default function* rootSaga() {
  yield [getBrandsWatcher(), getChocolatesWatchers()]
}