import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import React, { useState } from 'react';
import style from './style.module.css';
import BTree from './implementations';
import sleep from './utils/sleep';
import { appContext, initialContext } from './context';
import { NodeValue, ArraySimulator } from './components';

let setAppStateGlobal;

function App() {
  const [appState, setAppState] = useState(initialContext);
  const [value, setValue] = useState(-1);
  const [checked, setChecked] = useState(false);
  setAppStateGlobal = setAppState;

  const findByTree = (value) => {
    BTree.searchValue(BTree.root, value);
  };

  const findByArray = async (value) => {
    for (let i = 0; i < students.length; i++) {
      await sleep(500);
      setAppState((prevState) => ({
        ...prevState,
        currentBTreeNode: -1,
        currentArrayIndex: students[i].index,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
        isFinding: true,
        steps: prevState.steps + 1,
      }));

      if (students[i].id == value) {
        setAppState((prevState) => ({
          ...prevState,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: -1,
          matchingArrayIndex: students[i].index,
          isFinding: false,
        }));

        break;
      }

      if (i == students.length - 1) {
        setAppState((prevState) => ({
          ...prevState,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: -1,
          matchingArrayIndex: -1,
          isFinding: false,
        }));

        alert(`${value} not founded`);
      }
    }
  };

  const find = (value) => {
    if (!value || value > 72 || value < 40) {
      alert('Please enter a valid input between 40 and 72');
      setAppState((prevState) => ({
        ...prevState,
        steps: 0,
        currentBTreeNode: -1,
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
        isFinding: false,
      }));
    } else {
      if (checked) {
        setAppState((prevState) => ({
          ...prevState,
          steps: 0,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: -1,
          matchingArrayIndex: -1,
          isFinding: true,
        }));
        findByTree(value);
      } else {
        setAppState((prevState) => ({
          ...prevState,
          steps: 0,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: -1,
          matchingArrayIndex: -1,
          isFinding: true,
        }));
        findByArray(value);
      }
    }
  };

  const students = [
    { index: 0, id: 55, name: 'James' },
    { index: 1, id: 46, name: 'John' },
    { index: 2, id: 51, name: 'Robert' },
    { index: 3, id: 63, name: 'Jason' },
    { index: 4, id: 70, name: 'Michael' },
    { index: 5, id: 41, name: 'William' },
    { index: 6, id: 48, name: 'David' },
    { index: 7, id: 53, name: 'Richard' },
    { index: 8, id: 61, name: 'Joseph' },
    { index: 9, id: 65, name: 'Thomas' },
    { index: 10, id: 75, name: 'Charles' },
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
    { index: 23, id: 71, name: 'Edward' },
    { index: 24, id: 72, name: 'George' },
  ];

  return (
    <appContext.Provider value={appState}>
      <div className={style.app}>
        <div className={style.body}>
          <div className={style.leftPage}>
            <div className={style.title}>
              <div className={style.typo}>
                Course: Advanced Data Structures and Algorithms
                <div className={style.typo}>
                  Topic: B-Tree
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhóm:
                  3
                </div>
              </div>
            </div>
            <div className={style.inputContainer}>
              <TextField
                label="Enter a number to find"
                className={style.textField}
                variant="outlined"
                onChange={(event) => {
                  setValue(parseInt(event.target.value, 10));
                }}
              />
              <Button
                className={style.button}
                variant="contained"
                color="primary"
                onClick={() => {
                  find(value);
                }}
                disabled={appState.isFinding}
              >
                Find
              </Button>
              <FormControlLabel
                control={
                  <Switch
                    disabled={appState.isFinding}
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    color="primary"
                  />
                }
                label="Find by B-Tree"
                className={style.switch}
              />
              <div className={style.steps}>Steps: {appState.steps}</div>
            </div>
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
                    <NodeValue>70</NodeValue>
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
                    <NodeValue>75</NodeValue>
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
                    <NodeValue>71</NodeValue>
                    <div className={style.bar}></div>
                    <NodeValue>72</NodeValue>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.arrayPage}>
            <ArraySimulator students={students} />
          </div>
        </div>
      </div>
    </appContext.Provider>
  );
}

export { setAppStateGlobal };
export default App;
