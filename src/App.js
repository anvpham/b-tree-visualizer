import React from 'react';
import style from './style.module.css';
import BTree from './implementations';
import { NodeValue, ArraySimulator } from './components';

function App() {
  BTree.searchValue(BTree.root, 72);
  const students = [
    { index: 0, id: 55, name: 'James' },
    { index: 1, id: 46, name: 'John' },
    { index: 2, id: 51, name: 'Robert' },
    { index: 3, id: 63, name: 'Jason' },
    { index: 4, id: 67, name: 'Michael' },
    { index: 5, id: 41, name: 'William' },
    { index: 6, id: 48, name: 'David' },
    { index: 7, id: 53, name: 'Richard' },
    { index: 8, id: 61, name: 'Joseph' },
    { index: 9, id: 65, name: 'Thomas' },
    { index: 10, id: 69, name: 'Charles' },
    { index: 11, id: 40, name: 'Christopher' },
    { index: 12, id: 45, name: 'Daniel' },
    { index: 13, id: 47, name: 'Matthew' },
    { index: 14, id: 49, name: 'Anthony' },
    { index: 15, id: 50, name: 'Donald' },
    { index: 16, id: 52, name: 'Mark' },
    { index: 17, id: 54, name: 'Paul' },
    { index: 18, id: 60, name: 'Steven' },
    { index: 19, id: 62, name: 'Andrew' },
    { index: 20, id: 64, name: 'Joshua' },
    { index: 21, id: 66, name: 'Kevin' },
    { index: 22, id: 68, name: 'Brian' },
    { index: 23, id: 70, name: 'Edward' },
    { index: 24, id: 71, name: 'George' },
  ];

  console.log(students.length);

  return (
    <div className={style.app}>
      <div className={style.header}>
        <div className={style.typo}>
          Course: Advanced Data Structures and Algorithms
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
