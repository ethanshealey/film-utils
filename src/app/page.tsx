'use client'
import { Button, Card, Divider, Input, InputNumber, Radio, Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import { useState } from 'react';
import IsoUtilties from '@/util/IsoUtilities';
import CommonUtilities from '@/util/CommonUtilities';
import { PiFunctionBold, PiApertureBold  } from "react-icons/pi";
import ShutterSpeedUtilties from '@/util/ShutterSpeedUtilties';
import { FaArrowRotateLeft } from "react-icons/fa6";
import ApertureUtilties from '@/util/ApertureUtilities';

export default function Home() {

  const [ currentIso, setCurrentIso ] = useState<number>(100)
  const [ currentAperture, setCurrentAperture ] = useState<string>('8')
  const [ currentShutterSpeed, setCurrentShutterSpeed ] = useState<string>('1/100')

  const [ targetIso, setTargetIso ] = useState<number>(100)
  const [ targetAperture, setTargetAperture ] = useState<string>('')
  const [ targetShutterSpeed, setTargetShutterSpeed ] = useState<string>('')

  const [ mode, setMode ] = useState<string>('speed')

  const calculate = () => {

    const isoRatio: number = currentIso/targetIso
    const adjShutterSpeed: number = ShutterSpeedUtilties.convertSpeedToDecimal(currentShutterSpeed) * isoRatio
    const adjAperture: number = parseFloat(currentAperture) * Math.sqrt(isoRatio)

    if(mode === 'aperture') {
      setTargetAperture(adjAperture.toFixed(1).replace('.0', ''))
      setTargetShutterSpeed(currentShutterSpeed)
    }
    else {
      setTargetAperture(currentAperture)
      setTargetShutterSpeed(CommonUtilities.convertDecimalToFraction(adjShutterSpeed))
    }
  }

  const reset = () => {
    setCurrentIso(100)
    setCurrentAperture('8')
    setCurrentShutterSpeed('1/100')

    setTargetIso(100)
    setTargetAperture('')
    setTargetShutterSpeed('')
  }

  return (
    <main>
      <Card 
        title="ISO Extrapolation Calculator" 
        className='iso-card'
      >
        <div className='iso-card-content'>
          <div className="">
            <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)} size="small" buttonStyle="solid">
              <Radio.Button value="aperture">Modify Aperture</Radio.Button>
              <Radio.Button value="speed">Modify Shutter Speed</Radio.Button>
            </Radio.Group>
          </div>
          <Divider />
          <div className="iso-inputs">
            <div className='iso-left'>
              <fieldset>
                <label>Current ISO</label>
                <Select defaultValue={100} onChange={(e) => setCurrentIso(e)} value={currentIso}>
                  {
                    IsoUtilties.getPossibleIsoValues().map((value: number) => (
                      <Select.Option value={value} key={CommonUtilities.uuid()}>{value}</Select.Option>
                    ))
                  }
                </Select>
              </fieldset>
              <fieldset>
                <label>Current Aperture</label>
                <Select defaultValue={"8"} onChange={(e) => setCurrentAperture(e)} value={currentAperture}>
                  {
                    ApertureUtilties.getPossibleAperatures().map((value: string) => (
                      <Select.Option value={value} key={CommonUtilities.uuid()}><span className='ap-value'><PiFunctionBold />{ value }</span></Select.Option>
                    ))
                  }
                </Select>
              </fieldset>
              <fieldset>
                <label>Current Shutter Speed</label>
                <Select defaultValue={"1/100"} value={currentShutterSpeed} onChange={(e) => setCurrentShutterSpeed(e)}>
                  {
                    ShutterSpeedUtilties.getPossibleShutterSpeeds().map((value: string) => (
                      <Select.Option value={value} key={CommonUtilities.uuid()}>{value}</Select.Option>
                    ))
                  }
                </Select>
              </fieldset>
            </div>
            <ArrowRightOutlined className="iso-arrow-divider" />
            <div className='iso-right'>
            <fieldset>
                <label>Target ISO</label>
                <Select defaultValue={100} onChange={(e) => setTargetIso(e)} value={targetIso}>
                  {
                    IsoUtilties.getPossibleIsoValues().map((value: number) => (
                      <Select.Option value={value} key={CommonUtilities.uuid()}>{value}</Select.Option>
                    ))
                  }
                </Select>
              </fieldset>
              <fieldset>
                <label>Target Aperture</label>
                <Input disabled value={targetAperture} prefix={<PiFunctionBold/>} />
              </fieldset>
              <fieldset>
                <label>Target Shutter Speed</label>
                <Input disabled value={targetShutterSpeed} />
              </fieldset>
            </div>
          </div>
          <Divider />
          <div className='iso-btns'>
            <Button type="default" className='iso-reset-btn' onClick={reset} icon={<FaArrowRotateLeft />}></Button>
            <Button type="primary" className='iso-calc-btn' onClick={calculate}>Calculate</Button>
          </div>
        </div>
      </Card>
    </main>
  )
}
