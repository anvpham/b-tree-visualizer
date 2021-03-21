import React from 'react';
import style from './style.module.css';
import BTree from './implementations';
import { NodeValue, ArraySimulator } from './components';

function App() {
  BTree.searchValue(BTree.root, 72);
  const students = [
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
    { index: 0, id: 55, name: 'An Pham' },
  ];

  console.log(students.length);

  return (
    <div className={style.app}>
      <div className={style.header}>
        <div className={style.typo}>
          Course: Cấu trúc dữ liệu và giải thuật nâng cao
        </div>
        <div className={style.typo}>
          Topic: B-Tree
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Nhóm: 3
        </div>
      </div>
      <div className={style.body}>
        <div className={style.treeVisualizer}>
          <div className={style.treeContainer}>
            <div className={`${style.layer} ${style.layer1}`}>
              <div className={style.node}>
                <NodeValue>55</NodeValue>
              </div>
            </div>
            <div className={style.layer}>
              <div className={`${style.node} ${style.nodelayer2}`}>
                <NodeValue>46</NodeValue>
                <div className={style.bar}></div>
                <NodeValue>51</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer2}`}>
                <NodeValue>63</NodeValue>
                <div className={style.bar}></div>
                <NodeValue>67</NodeValue>
              </div>
            </div>
            <div className={style.layer}>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>41</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>48</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>53</NodeValue>
                <div></div>
              </div>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>61</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>65</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer3}`}>
                <NodeValue>69</NodeValue>
              </div>
            </div>
            <div className={style.layer}>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>40</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>45</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>47</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>49</NodeValue>
                <div className={style.bar}></div>
                <NodeValue>50</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>52</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>54</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>60</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>62</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>64</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>66</NodeValue>
                <div className={style.bar}></div>
                <NodeValue>68</NodeValue>
              </div>
              <div className={`${style.node} ${style.nodelayer4}`}>
                <NodeValue>70</NodeValue>
                <div className={style.bar}></div>
                <NodeValue>71</NodeValue>
              </div>
            </div>
          </div>
        </div>
        <div className={style.arrayPage}>
          <ArraySimulator students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
