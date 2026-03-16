import { tokenutility } from '@/data'
import Link from 'next/link'
import React from 'react'

const TokenUtility = () => {
  return (
    <div className='tokenutility'>
        <div className="ut-token">
            Token Utility
        </div>

        <div className="tokenutility-text">
            <h1>What Can You Do With $JECKS Tokens?</h1>
            <p>$JECKS tokens offer a wide range of utilities within our ecosystem and partner platforms.</p>
        </div>

        <div className="tokenutility-container">
            {tokenutility.map((tokeen) => (
                <div className="tokenutility-content" key={tokeen.id}>
                    <span>{tokeen.icon}</span>
                    <h1>{tokeen.id}</h1>
                    <p>{tokeen.content}</p>

                    <Link href="#">
                        <h2>Learn more</h2>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TokenUtility