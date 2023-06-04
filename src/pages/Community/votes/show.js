import {useEffect, useState} from 'react';
import { voteApi } from '../../../api'
import {Modal}  from '../../../components/Modal';
import {
  Progress,
} from '@chakra-ui/react';
export const Show = ({vote_id, disclousure}) => {
 
    const [result, setResult] = useState([]);
 
    useEffect(()=>{
        vote_id && voteApi.result(vote_id).then(res=>{
            setResult(res.data.data)
        })

    },[vote_id])


    const renderResult = () =>{
        let progress = [];


        for (let option in result) {
          progress.push( <div><h1>{option.option} - {option.votes}</h1><Progress hasStripe value={option.percentaje} /></div>)
        }
        return progress
    }

  return (
    <>
          <Modal
            isOpen={disclousure.isOpen}
            onClose={disclousure.onClose}
          >
                {result && renderResult()}
          </Modal>

    </>
  )
}
