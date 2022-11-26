/*
 * 一期联动
 * TODO 后期支持变量和函数以及其他action之后
 * @Author: jiangxiaowei
 * @Date: 2022-07-24 13:14:39
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-11-23 16:34:11
 */
import React, { memo, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { flowSchemaAtom } from '@generator/store'
import { Button, Collapse, Space } from 'antd'
import styles from './index.module.css'
import type { SetEffect } from '@jdfed/utils'
import DeleteIcon from '../DeleteIcon'
import { useFlow } from '@generator/hooks'
import SelectField from '../SelectField'
import OperatorField from '../OperatorField'
import Action from '../ActionField'
import SetValueField from '../SetValueField'
import produce from 'immer'
import { getOperatorOptionValue } from '@generator/utils/flow'
import type { Operator } from '@jdfed/utils'
import type { OperatorType } from '@generator/utils/flow'
const { Panel } = Collapse

const ControlFlow = () => {
  const [flowSchema, setFlowSchema] = useRecoilState(flowSchemaAtom)

  const {
    addControlFlow,
    deleteControlFlow,
    deleteCondintion,
    addCondintion,
    addEffect,
    deleteEffect,
  } = useFlow()

  const controlFlowActions = useMemo(() => {
    return (flowSchema?.actions || []).filter(
      (item) => item.type === 'controlFlow'
    )
  }, [flowSchema?.actions])

  return (
    <>
      {controlFlowActions.length > 0 && (
        <Collapse>
          {controlFlowActions.map((action, index) => {
            return (
              <Panel
                key={index}
                header={`条件逻辑${index + 1}`}
                extra={
                  <DeleteIcon onClick={deleteControlFlow.bind(this, index)} />
                }
              >
                <div className={styles.container}>
                  <div className={styles.title}>条件</div>
                  <div className={styles.content}>
                    {action.condintion.map((condintion, condintionIndex) => {
                      return (
                        <React.Fragment key={condintionIndex + 1}>
                          {/* <div
                            className={styles.condintion}

                          > */}
                          <Space align="start" className={styles.condintion}>
                            <div className={styles.subtitle}>{`条件${
                              condintionIndex + 1
                            }:`}</div>
                            <Space align="start">
                              <SelectField
                                value={condintion.fieldKey1}
                                onChange={(value, labelList) => {
                                  setFlowSchema((oldFlowSchema) => {
                                    return produce(oldFlowSchema, (draft) => {
                                      const condintion =
                                        draft.actions[index].condintion[
                                          condintionIndex
                                        ]
                                      condintion.fieldKey1 = value
                                        ? value + ' data'
                                        : ''
                                      // 清空的时候，同时清空比较操作符
                                      if (!value) {
                                        condintion.operator = ''
                                      } else {
                                        const type = (labelList as string[])[0]
                                          .split(' ')
                                          .pop()
                                          ?.replace(
                                            /\(|\)/g,
                                            ''
                                          ) as OperatorType
                                        // 选择的时候，operator设置的值不在fieldKey1类型的操作符options中，则默认设置第一个option
                                        if (
                                          !getOperatorOptionValue(
                                            type
                                          ).includes(condintion.operator)
                                        ) {
                                          condintion.operator =
                                            getOperatorOptionValue(type)[0]
                                        }
                                      }
                                    })
                                  })
                                }}
                                placeholder="请输入需要比较的第一个表单"
                              ></SelectField>
                              <OperatorField
                                fieldKey1={condintion.fieldKey1}
                                value={condintion.operator}
                                onChange={(value) => {
                                  setFlowSchema((oldFlowSchema) => {
                                    return produce(oldFlowSchema, (draft) => {
                                      draft.actions[index].condintion[
                                        condintionIndex
                                      ].operator = value as Operator
                                    })
                                  })
                                }}
                              />
                              {condintion.operator != 'change' && (
                                <SetValueField
                                  disabled={!condintion.fieldKey1}
                                  depencyKey={condintion.fieldKey1}
                                  value={condintion.value2}
                                  mode="compare"
                                  onChange={(value) => {
                                    setFlowSchema((oldFlowSchema) => {
                                      return produce(oldFlowSchema, (draft) => {
                                        draft.actions[index].condintion[
                                          condintionIndex
                                        ].value2 = value
                                      })
                                    })
                                  }}
                                />
                              )}
                            </Space>
                            <Space>
                              <DeleteIcon
                                className={styles.deleteicon}
                                onClick={deleteCondintion.bind(this, {
                                  actionIndex: index,
                                  condintionIndex,
                                })}
                              />
                              <Button
                                shape="circle"
                                onClick={addCondintion.bind(this, {
                                  actionIndex: index,
                                  condintionIndex,
                                  logicOperator: '||',
                                })}
                              >
                                或
                              </Button>
                              <Button
                                shape="circle"
                                onClick={addCondintion.bind(this, {
                                  actionIndex: index,
                                  condintionIndex,
                                  logicOperator: '&&',
                                })}
                              >
                                且
                              </Button>
                            </Space>
                          </Space>
                          {/* </div> */}
                          {condintion.logicOperator === '||' && (
                            <div className={styles.logicoperator}>或</div>
                          )}
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.title}>结果</div>
                  <div className={styles.content}>
                    {/* TODO 后续支持merge形式，交互待确定 */}
                    {(
                      (action?.effect || []).filter(
                        (item) => item.type !== 'subAction'
                      ) as SetEffect[]
                    ).map((effect, effectIndex) => {
                      // const [fieldKey,type,property] = effect.fieldKey.trim().split(' ')
                      return (
                        <Space
                          align="start"
                          className={styles.action}
                          key={effectIndex + 1}
                        >
                          <div className={styles.subtitle}>{`动作${
                            effectIndex + 1
                          }:`}</div>
                          <Action
                            effect={effect}
                            onChange={(effect) => {
                              setFlowSchema((oldFlowSchema) => {
                                return produce(oldFlowSchema, (draft) => {
                                  draft.actions[index].effect[effectIndex] =
                                    effect
                                })
                              })
                            }}
                          />
                          <Space>
                            <DeleteIcon
                              className={styles.deleteicon}
                              onClick={deleteEffect.bind(this, {
                                actionIndex: index,
                                effectIndex,
                              })}
                            />
                          </Space>
                        </Space>
                      )
                    })}
                    <Space>
                      <Button
                        className={styles.addeffectbutton}
                        shape="round"
                        onClick={addEffect.bind(this, index)}
                      >
                        新增动作
                      </Button>
                    </Space>
                  </div>
                </div>
              </Panel>
            )
          })}
        </Collapse>
      )}
      <Button
        className={styles.addbutton}
        shape="round"
        onClick={addControlFlow}
      >
        新增条件
      </Button>
    </>
  )
}

export default memo(ControlFlow)
