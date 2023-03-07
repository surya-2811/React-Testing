import checkPropTypes from 'check-prop-types'
import checkProptypes from 'check-prop-types'
import { Component } from 'react'

export const findByTestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps ) =>{
    const propError = checkPropTypes(component.checkPropTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined()
}