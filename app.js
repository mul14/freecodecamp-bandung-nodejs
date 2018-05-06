#!/usr/bin/env node

const prog = require('caporal');
const axios = require('axios');
prog
  .command('say', '')
  .argument('msg', '')
  .action(async (args, options, logger) => {

    const res = await axios.get('http://localhost:3000/' + '?msg=' + args.msg)
    console.log(res.data)

  });

prog.parse(process.argv);
