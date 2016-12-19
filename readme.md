# pe-machine-type

**Get the CPU type of a Windows executable, cross-platform.**

[![npm status](http://img.shields.io/npm/v/pe-machine-type.svg?style=flat-square)](https://www.npmjs.org/package/pe-machine-type) [![node](https://img.shields.io/node/v/pe-machine-type.svg?style=flat-square)](https://www.npmjs.org/package/pe-machine-type) [![Travis build status](https://img.shields.io/travis/vweevers/pe-machine-type.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/pe-machine-type) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/pe-machine-type.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/pe-machine-type) [![Dependency status](https://img.shields.io/david/vweevers/pe-machine-type.svg?style=flat-square)](https://david-dm.org/vweevers/pe-machine-type)

## example

```js
const mt = require('pe-machine-type')

mt('chrome.exe', function (err, type) {
  console.log(type) // 'amd64'
})
```

## `mt(mixed, callback)`

Where `mixed` is either a filename or a file descriptor.

## types

| type      | description  |
| --------- | ------------ |
| unknown   | The contents of this field are assumed to be applicable to any machine type |
| am33      | Matsushita AM33 |
| amd64     | x64 |
| arm       | ARM little endian |
| armnt     | ARM Thumb-2 little endian |
| ebc       | EFI byte code |
| i386      | Intel 386 or later processors and compatible processors |
| ia64      | Intel Itanium processor family |
| m32r      | Mitsubishi M32R little endian |
| mips16    | MIPS16 |
| mipsfpu   | MIPS with FPU |
| mipsfpu16 | MIPS16 with FPU |
| powerpc   | Power PC little endian |
| powerpcfp | Power PC with floating point support |
| r4000     | MIPS little endian |
| riscv32   | RISC-V 32-bit address space |
| riscv64   | RISC-V 64-bit address space |
| riscv128  | RISC-V 128-bit address space |
| sh3       | Hitachi SH3 |
| sh3dsp    | Hitachi SH3 DSP |
| sh4       | Hitachi SH4 |
| sh5       | Hitachi SH5 |
| thumb     | Thumb |
| wcemipsv2 | MIPS little-endian WCE v2 |

As specified by [Microsoft PE and COFF Specification 9.3](https://download.microsoft.com/download/9/c/5/9c5b2167-8017-4bae-9fde-d599bac8184a/pecoff_v83.docx) <sup>[doc]</sup>, section 3.3.1.

## related

- [pe-coff](https://github.com/vweevers/pe-coff])
- [pe-machine-type-descriptor](https://github.com/vweevers/pe-machine-type-descriptor])
- [pe-signature](https://github.com/vweevers/pe-signature)
- [pe-signature-offset](https://github.com/vweevers/pe-signature-offset)

## install

With [npm](https://npmjs.org) do:

```
npm install pe-machine-type
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
