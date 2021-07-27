import {expect} from 'chai';
import {deployments, ethers} from 'hardhat';

describe('Greeter', function () {
  beforeEach(async function () {
    await deployments.fixture();
  });

  it("Should return the new greeting once it's changed", async function () {
    const greeter = await ethers.getContract('Greeter');

    expect(await greeter.greet()).to.equal('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
