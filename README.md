<h3>Client for DBT and DIG Presales and also some owner functions.</h3>

In this presale, we use the ECDSA algorithm to check users from the whitelist. So, to start using presale, the first thing you need to do is create signatures with the addresses of the owner, presale and users.
</br>
Signatures for each presale you put in ***signsDBT.json*** and ***signsDIG.json*** files in ***src/signatures*** folder in format 
```
    [
        {
            "address": "0xsome_address",
            "v": "some_v",
            "r": "some_r",
            "s": "some_s"
        }
        ...
    ]
```
To easily add signatures, we have written scripts in the ***/signs*** folder.
<br>
After deploying your contracts, specify the addresses in <b><i>contract.options.address</i></b> in the <b><i>componentDidMount</i></b> function.
<br>
Also don't forget to set ***isOwner*** in the application, it is used to additional functions.