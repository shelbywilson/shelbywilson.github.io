import React, { useState } from 'react';
import Sketch from './index';

import './_container.scss';

export const Container = () => {
    const [preserveAspectRatio, setPreserveAspectRatio] = useState(false)

    return (
        <div>
            <p>
                <label style={{marginBottom: '1rem'}}>
                    <input type="checkbox"
                        checked={preserveAspectRatio}
                        onChange={() => setPreserveAspectRatio(prev => !prev)}
                        />
                    Preserve aspect ratio
                </label>
            </p>
            <div className="twenty-one-cubes-container d-flex">
                <Sketch preserveAspectRatio={preserveAspectRatio}
                    />
            </div>
        </div>
    )
}

export default Container;