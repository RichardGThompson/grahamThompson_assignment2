import './styles.css';
import { Row } from './row';
import { MemberFooter } from '../common-page-elems/member-footer';
import { BrowseHeader } from './browse-header';
import { BrowseBillboard } from './browse-billboard';


export const Browse = (props) => {
    // An array that contains the titles to be displayed in the rows (Ideally this would be pulled from a server, but that is outside of the scope)
    const rows = [
        {
            rowTitle: "Tv Shows",
            rowItems: [
                {
                    itemName: "Big Mouth",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaNeEqzOlqssJOd2UcPq9uDNaBHppptGB8KE4KkrNQ9vCJoDsMxn-f6ro7H3TR6RAw3_48aSWU_CXqNUhRIbwK_6RY6YccBJDTpHEMjgPZG995iyI6l6zThZgHqkV_hu8WfdECo03HjJOQME4yEgPiFLsWplCaXnp9fCzjL6QJHSVPeG6tVoUfB6cCf3WFqnDMiMPXCzGOozStOnoFwAbiIz.jpg?r=aac"
                },
                {
                    itemName: "Tiger King",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2pSHUiEi7LHxEmwa0KK_j35WtY-JAPM6M937zBEFBBYn-cSe_fk8CpyjOcYyJmU9SzYWKWGI7w2lJYsGvhg9QKu9VmNPov2zpR3a8ONq-0CBNuyxq-B0YNxFys.jpg?r=d71"
                },
                {
                    itemName: "Explained",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWt-SRwVHSA5FvQTYwfVh5sKDC6702oAffKUZJ-HZdbhlmXFHBLR5R9b3-NJeGEPEz57RVvy7gQcOJlpo-lkCXS11mCIe85F24vISlsa7Iksy0XhnnaniwTjL-PO4mImqqZo8dOx8i5IamhZXR4P4phjPJS5Ug.jpg?r=f6e"
                },
                {
                    itemName: "Black Mirror",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMeRlrLJszZK1PPcfBNRSlWjLN6oOCiyEcH4Gu3dHI9rDeOe1xCjm9eKBIRzB8xqb2TB1ZZtvO-4OENdyoElsqFMEfyUenyx0nx20hrhkpwiziodReUWh4bPfyq.jpg?r=743"
                },
                {
                    itemName: "Parks and Rec",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVbH4gypiIXMminj-ztFvDuCwC5Ct0uKl7t0M_55GONHKhgTvxesn7LqpwDhJR6TC82HMAzDCeKpqx3FJAR50CkeEM.jpg?r=72a"
                },
                {
                    itemName: "Community",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYFU54kh9JTIFcgz63ncUvud5thoiu2ytOwzSLBEc7lKvsW0Ix_YKb9jTkK3dPTnYfvLzJKi6tGFlgjmiJ4j-h-1zr8.jpg?r=190"
                },
                {
                    itemName: "Inside Job",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTa8zKZrDzt9Ib_dhDb26tjjxhH-Jopmyv-3wfbycNl-E7YUZ8-SFCayNNaXn81SacR-iD9xDfgS34rnr-Gw0YAJcON2KGgwq0eAvfUau5no8stR1zu64z23j508.jpg?r=25b"
                }
            ]
        },
        {
            rowTitle: "Horror Movies",
            rowItems: [
                {
                    itemName: "The Thing",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdsPp2IE5Vy_-rHSjvfcinh5CvQ-UPOteK086hwSSHep8v7O3rmlYG0qmnQllcPWhM_HK83RepUfJZcp13w8vBKOJMM.jpg?r=813"
                },
                {
                    itemName: "Zombieland: Double Tap",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW_jGj7H-U0rUptdq-J0al_rPhWWOkjsLKD3Fkqq0piW11qwgRJUz8jBO5HP827KbpChNVeqCd49nYd51ACykdPW7x8.jpg?r=f9d"
                },
                {
                    itemName: "Beetlejuice",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWytZV-d02t-XhPVPLWHMb4R6R9hFTEDTtnM4K9727H4PpPlFBRokk_zmJH4Ril8aDlPrZ3CVDx617lqe0TUUiVIfS0.jpg?r=425"
                },
                {
                    itemName: "Doctor Sleep",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbV5ACP2y3aGmIT-bVWtkAb4AikqlejO58l3EUDpjlEzpCCHca28tTtubfFfkhB6gw4Xl-n1FXzbY4NQgEmPLVESXGQ.jpg?r=202"
                },
                {
                    itemName: "Halloween",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6h7sXTKzUsDoQOE9pOZn6NbQXaL67YXEPeU2AfrAiF5fBdssRfSZClr7i-g7XvhWs7BxUt1cwoVpf1K7TBMNPg6p0.jpg?r=fdb"
                },
                {
                    itemName: "Cabin in the Woods",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUykss_be8Pg6UFHPCzBQN0gozE85myg2THytW9Shp8mZ8QaFTZdq0IAO1PcV-m3m7Jvwq6KvDgAm2rQg3y-aV4b3tk.jpg?r=5c4"
                },
                {
                    itemName: "Scary Movie",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVqdgi2SoBc4Jz0G32MJxoKNDZmxLYK2WffmxC5yzkYi8wV2GMsNa4kldM9w6hq1XS-QplqLVeDoEnPIy776EUOq3Nw.jpg?r=3ba"
                }
            ]
        },
        {
            rowTitle: "Only on Netflix",
            rowItems: [
                {
                    itemName: "Formula 1: Drive to Survive",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3fnDcW_ECNh4CSnTPI6x_UMouOcxmrhEigPHvszjAoAsECtBj1DY5FEVwxiabBMckHrnJoCldgHhfMdnVTkER_bqf1db4HNoTHr-QeAcQCtgf45TDtWBIo3uP3.jpg?r=4ab"
                },
                {
                    itemName: "Black Mirror",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMeRlrLJszZK1PPcfBNRSlWjLN6oOCiyEcH4Gu3dHI9rDeOe1xCjm9eKBIRzB8xqb2TB1ZZtvO-4OENdyoElsqFMEfyUenyx0nx20hrhkpwiziodReUWh4bPfyq.jpg?r=743"
                },
                {
                    itemName: "High Score",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRrEVz7sIkvn5VnXP72hmcmYk1EC1lebN9QnBEDsy4hx1tDoMaW5_iVD_jgmlTUPqt7pOTEqVXrq5xceMakjloKKS6fFkT-B6arGRlKbazNpg4hD6_g5TbIs5chP.jpg?r=1e7"
                },
                {
                    itemName: "Space Force",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW87wBIQQHr0uEok5yVlwWORzVJYAovusdlXk7kE4RwoKaBmjmBnNlpSIWlMQSo71mo5RmlilFEYWnVdioyltooghgLMAwOmFI2N4W66FnQD842HwkjSB6IGxay-.jpg?r=abf"
                },
                {
                    itemName: "The Queen's Gambit",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTkLaJLrR7faXhHg_plP0nXDQ4L2Uy4QWERQL58jtuB2yp7l3AoXr41P6QY-XzvkS-lQpOqBqvq21jjipSZ6zHK8IRVKqf2bTJ61Lir5CXBI7Vi-Q3GD4PlAwaZz.jpg?r=93f"
                },
                {
                    itemName: "You",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSDpFUKx16auy8gs-Ys2ou91VVPSi3AmqeFSQepEKIi7z4-t7RBJFvkEOo8Ge77fIaIgAKT0PJ5rrPjhuG344ZsI8LQQ0iJ-g9us9SP-X-fohCcXC7OekSoHhkKNv8nSC9MLLxMn5YcA4MukbOyM8jvfhNiPl9Z5n92o2OAJZw3SS__wBgQOdRk.jpg?r=aef"
                },
                {
                    itemName: "BoJack Horseman",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABayZvdorWqoxCP4j6N8HHmpDEMNFW0OKwWv8ZNdvmEeeqiyW4op-d_mMvGUJvpoEveZ8V46d_nVStQlpwD5B4j_UK3rqeNSEg1LiGtPkBwJEXWAR8r3IHUW13b5l.jpg?r=37e"
                }
            ]
        },
        {
            rowTitle: "Award-Winning Films",
            rowItems: [
                {
                    itemName: "Arrival",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe80XaMInRnTUgkQZCdVFyGP54fFuyQr_PdlI0luCqr8UeCCUep_6ZH45JqHx3X1BAx691M4unQMcLEA7SxniH5gdkI.jpg?r=fda"
                },
                {
                    itemName: "Moneyball",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABatNCdaNDiatiAvnSnk3PHtVKGduwMre06sm44e_gBDs-_shFY0JUauJtQTWqQXKCrAeqGTvsSwskQBlBpI30i_u1Cw.jpg?r=b4d"
                },
                {
                    itemName: "Jurassic Park",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSPeV4S4UgUnypm8dt9i9P8SvTOmDK1XwKa2_PrLFmw-extw-w8ObSSOUk_LmGq3G6rxwBRWOrMGE7NCS40TQKWKh-s.jpg?r=179"
                },
                {
                    itemName: "The Lego Movie",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcIg7vGTzeOiegbi0aamHXgnm029diAApcuEb00tUW4IbZuMEc9SyI8pH22v4xTLjP_866dMABVzMMB0cqUPIHpbrBg.jpg?r=7d5"
                },
                {
                    itemName: "Baby Driver",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXu89PSoTTRHUlGyPKwhsggDHU0O_aCAYxqXNg73tP9p1rKuAubt1q6tYWyn7IcZFedww50rXhVri1Uc8Ir3G7QqT9w.jpg?r=855"
                },
                {
                    itemName: "Joker",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3QuiQkmSDEXcFUd4XA1Jok-5U9gz7SE5Oaj2HppEOvBcSRuVll2o4QSp1VveGV4zZ9CvqUPwQzWjssyZKTLXPQ3jw.jpg?r=992"
                },
                {
                    itemName: "Spiderman: Into the Spiderverse",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTqU4QLTFAppEndn7jzujFo-44Qr_4jNVfZ6UTxfdg4jINpf5-iw0srn9DdpznUgq9CqhOkKwPiwUW3B3zZ-Fjdg_2Q.jpg?r=969"
                }
            ]
        }
    ]
    
    return(
        <div>
            <BrowseHeader/>

            <div id="main-view" className="mainView" role="main">
                <div className="lolomo is-fullbleed">
                    <h1 className="visually-hidden">Netflix Home</h1>
                    <BrowseBillboard/>
                    {/* Render the titles to be shown to the user */}
                    {rows.map( (row) => <Row rowTitle={row.rowTitle} rowItems={row.rowItems}/>)}
                </div>
            </div>
            <MemberFooter/>
        </div>
    )
}
