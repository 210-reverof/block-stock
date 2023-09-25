
import React, { ChangeEvent, useEffect, useState } from 'react';
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';
import CandleChart from '../../components/Chart/CandleChart';
import styled from 'styled-components';
import { TacticContainer } from './MakeTactic.style';
import BlockCoding from '../../components/MakeTactic/BlockCoding/BlockCoding';
import TacticResult from '../../components/MakeTactic/TacticResult/TacticResult';
import { useLocation } from 'react-router-dom';

const TestDiv = styled.div`
    background-color: rgba(255,0,0,0.3);
    padding: 1px;
`;

function MakeTactic() {
    const [flag, setFlag] = useState(true);

    const [title, setTitle] = useState("");
    const [optionCode, setOptionCode] = useState("");
    const [optionName, setOptionName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startAsset, setStartAsset] = useState(10000000);
    const [term, setTerm] = useState("");
    const [repeatCnt, setRepeatCnt] = useState("");
    const [tacticPythonCode, setTacticPythonCode] = useState(undefined);
    const [tacticJsonCode, setTacticJsonCode] = useState(undefined);
    const [tacticImg, setTacticImg] = useState(undefined);

    //차트에서 사이드바로 전략테스트로 이동
    let location = useLocation();
    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
      if(currentPath === location.pathname){
        setFlag(true);
      }
      console.log(location.pathname)
      setCurrentPath(location.pathname);
    }, [location]);

    const toggleFlag = () => {
        setFlag(!flag);
    }
    const returnTitle = (ret) => {
        setTitle(ret);
    }
    const returnStartAsset = (ret) => {
        setStartAsset(ret);
    }
    const returnOptionCode = (ret) => {
        setOptionCode(ret);
    }
    const returnOptionName = (ret) => {
        setOptionName(ret);
    }
    const returnStartDate = (ret) => {
        setStartDate(ret);
    }
    const returnTerm = (ret) => {
        setTerm(ret);
    }
    const returnRepeatCnt = (ret) => {
        setRepeatCnt(ret);
    }
    const returnTacticPythonCode = (ret) => {
        setTacticPythonCode(ret);
    }
    const returnTacticJsonCode = (ret) => {
        setTacticJsonCode(ret);
    }

    const returnTacticImg = (ret) => {
        setTacticImg(ret);
    }

    return (
        <TacticContainer >
            {
                flag ?
                    <BlockCoding
                        toggleFlag={toggleFlag}
                        returnTitle={(ret) => { returnTitle(ret) }}
                        returnOptionCode={(ret) => { returnOptionCode(ret) }}
                        returnOptionName={(ret) => { returnOptionName(ret) }}
                        returnStartDate={(ret) => { returnStartDate(ret) }}
                        returnTerm={(ret) => { returnTerm(ret) }}
                        returnRepeatCnt={(ret) => { returnRepeatCnt(ret) }}
                        returnTacticPythonCode={(ret) => { returnTacticPythonCode(ret) }}
                        returnTacticJsonCode={(ret) => { returnTacticJsonCode(ret) }}
                        returnTacticImg={(ret) => { returnTacticImg(ret) }}
                        returnStartAsset={(ret) => { returnStartAsset(ret) }}
                    ></BlockCoding>
                    :
                    <TacticResult
                        title={title}
                        startAsset={startAsset}
                        optionCode={optionCode}
                        optionName={optionName}
                        startDate={startDate}
                        term={term}
                        repeatCnt={repeatCnt}
                        tacticPythonCode={tacticPythonCode}
                        tacticJsonCode={tacticJsonCode}
                        tacticImg={tacticImg}
                    ></TacticResult>
            }
        </TacticContainer >
    )
}

export default MakeTactic