import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';

import './index.less';

export default function(props) {
  const [state, setState] = useState();

  const [city, cityLoading] = useHttpHook({
    url: '/commons/city',
  });
  const [house] = useHttpHook({
    url: '/house/hot',
  });

  useEffect(() => {}, []);

  return (
    <div className="home">
      {/**header登录 */}
      <Header />
      {/**搜索 */}
      <Search city={city} cityLoading={cityLoading} />
      {/**热门民宿 */}
      <Hot house={house} />
    </div>
  );
}
