import React from 'react'
import './lesson_4';
import {log} from "util";

type PromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const Lesson4 = () => {
    const firstPromise = new Promise<Object>(res => {
        setTimeout(() => {
            res({name: "Anna"})
        }, 2000)
    })
    const secondPromise = new Promise<Object>(res => {
        setTimeout(() => {
            res({age: 16})
        }, 3000)
    })
    const thirdPromise = new Promise<Object>(res => {
        setTimeout(() => {
            res({city: 'Donetsk'})
        }, 4000)
    })
    const result = Promise.all([firstPromise, secondPromise, thirdPromise])
    result.then(([a, b, c]) => (console.log({...a, ...b, ...c})))


    // const newPromise = new Promise<string>(res => {
    //     setTimeout(()=> {
    //         res("My name is")
    //     },1000 )
    // })
    // const onSuccess = (par: string) => {
    //     return `${par}, Gena`
    // }
    //  const print = (par: string) => {
    //      console.log(par)
    // }
    // newPromise.then(onSuccess).then(print)


    const handlePromise: PromiseType = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => {
            console.log(`Promise is resolved with data: ${paramName}`)
        },
        onError: (paramName: string) => {
            console.log(`Promise is rejected with error: ${paramName}`)
        }
    }

    const onCreatePromiseHandler = () => {
        const promise = new Promise((res, rej) => {
            handlePromise.resolve = res
            handlePromise.reject = rej
        })
        handlePromise.promise = promise
        handlePromise.promise
            .then((res) => {
                handlePromise.onSuccess(res)
            })
            .catch(rej => {
                handlePromise.onError(rej)
            })
        console.log(handlePromise)

    }
    const onResolvePromiseHandler = () => {
        handlePromise.resolve && handlePromise.resolve('success')
    }
    const onRejectPromiseHandler = () => {
        handlePromise.reject && handlePromise.reject('error')

    }

    // const promise = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res("Promise Data")
    //     }, 3000)
    // })
    // promise.then(console.log)

    return (
        <div>
            <button id='btn-create-promise' onClick={onCreatePromiseHandler}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={onResolvePromiseHandler}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={onRejectPromiseHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;